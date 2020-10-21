import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInPage } from './sign-in.page';

import { SignInRoutingModule } from './sign-in-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignInRoutingModule
  ],
  declarations: [SignInPage]
})
export class HomePageModule {}
