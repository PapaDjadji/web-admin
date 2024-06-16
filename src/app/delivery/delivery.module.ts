import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CreateDeliveryComponent } from './create-delivery.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateDeliveryComponent // Déclarez le composant ici
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
   CreateDeliveryComponent
  ],
  providers: [
    // Ajoutez vos services nécessaires ici
  ]
})
export class DeliveryModule { }
