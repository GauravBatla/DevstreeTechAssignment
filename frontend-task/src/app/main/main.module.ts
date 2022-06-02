import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { AngularMaterialModule } from '../share/angular.material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    UserListingComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
  ]
})
export class MainModule { }
