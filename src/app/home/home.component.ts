import { Component, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { PackageService } from '../services/package.service';
import { DeliveryService} from '../services/delivery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  packages: any[] = [];
  deliveries: any[] = [];

  constructor(private packageService: PackageService, private deliveryService: DeliveryService) {

  }

  ngOnInit() {
    this.packageService.getPackages().subscribe(data => {
      this.packages = data;
    });

    this.deliveryService.getDeliveries().subscribe(data => {
      this.deliveries = data;
    });
  }


  createPackage(): void {
    // Logic to create package
    console.log('Creating package...');
  }

  createDelivery(): void {
    // Logic to create delivery
    console.log('Creating delivery...');
  }


}
