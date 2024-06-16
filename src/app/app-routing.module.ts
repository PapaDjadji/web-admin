import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDeliveryComponent } from './delivery/create-delivery.component';
import { HomeComponent } from './home/home.component';
import { CreatePackageComponent } from './package/create-package.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'create-package', component: CreatePackageComponent },
  { path: 'create-delivery', component: CreateDeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
