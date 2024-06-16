import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackageService } from '../services/package.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.css']
})
export class CreatePackageComponent implements OnInit {
  packageForm!: FormGroup;

  constructor(private fb: FormBuilder, private packageService: PackageService, private router: Router) {
  }

  ngOnInit() {
    this.packageForm = this.fb.group({
      description: ['', Validators.required],
      weight: [null, Validators.required],
      width: [null, Validators.required],
      height: [null, Validators.required],
      depth: [null, Validators.required],
      from_name: ['', Validators.required],
      from_address: ['', Validators.required],
      from_location: this.fb.group({
        lat: [null, Validators.required],
        lng: [null, Validators.required]
      }),
      to_name: ['', Validators.required],
      to_address: ['', Validators.required],
      to_location: this.fb.group({
        lat: [null, Validators.required],
        lng: [null, Validators.required]
      })
    });

  }


  createPackage(): void {
    console.log("enter")
    if (this.packageForm.valid) {
      console.log("enter value ", this.packageForm.value)
      this.packageService.createPackage(this.packageForm.value).subscribe(() => {
        this.router.navigate(['/home']);
      });
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs si le formulaire est invalide
      this.packageForm.markAllAsTouched();
    }
  }


}
