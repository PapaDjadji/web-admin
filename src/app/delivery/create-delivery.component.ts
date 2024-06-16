import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DeliveryService } from '../services/delivery.service';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {
  deliveryForm: FormGroup;
  packages: any[] = [];
  filteredPackages$: Observable<any[]> = of([]);

  constructor(
    private fb: FormBuilder,
    private packageService: PackageService,
    private deliveryService: DeliveryService,
    private router: Router
  ) {
    this.deliveryForm = this.fb.group({
      package_id: ['', Validators.required],
      pickup_time: [''],
      start_time: [''],
      end_time: [''],
      location: this.fb.group({
        lat: ['', Validators.required],
        lng: ['', Validators.required]
      }),
      status: ['open']
    });
  }

  ngOnInit() {
    this.packageService.getPackages().subscribe(packages => {
      this.packages = packages;
      this.filteredPackages$ = this.deliveryForm.get('package_id')!.valueChanges.pipe(
        startWith(''),
        map(value => this._filterPackages(value))
      );
    });
  }

  private _filterPackages(value: string): any[] {
    const filterValue = value ? value.toLowerCase() : '';
    return this.packages.filter(pkg => pkg.description.toLowerCase().includes(filterValue));
  }

  createDelivery() {
    if (this.deliveryForm.valid) {
      this.deliveryService.createDelivery(this.deliveryForm.value).subscribe(
        response => {
          console.log('Delivery created:', response);
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Error creating delivery:', error);
        }
      );
    }
  }

  onPackageSelected(event: Event) {
    const selectedPackageId = (event.target as HTMLSelectElement).value;
    const selectedPackage = this.packages.find(pkg => pkg.package_id === selectedPackageId);
    if (selectedPackage) {
      this.deliveryForm.patchValue({
        package_id: selectedPackage.package_id,
        location: {
          lat: selectedPackage.from_location.lat,
          lng: selectedPackage.from_location.lng
        }
      });
    }
  }
}
