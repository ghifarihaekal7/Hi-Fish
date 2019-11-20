import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllLocationPageRoutingModule } from './all-location-routing.module';

import { AllLocationPage } from './all-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllLocationPageRoutingModule
  ],
  declarations: [AllLocationPage]
})
export class AllLocationPageModule {}
