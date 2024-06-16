import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateDeliveryComponent } from '../delivery/create-delivery.component';
import { CreatePackageComponent } from './create-package.component';

@NgModule({
  declarations: [
   CreatePackageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CreatePackageComponent
  ],
  providers: [
    // Ajoutez vos services nécessaires ici
  ]
})
export class PackageModule { }
