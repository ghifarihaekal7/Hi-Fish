import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllLocationPage } from './all-location.page';

const routes: Routes = [
  {
    path: '',
    component: AllLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllLocationPageRoutingModule {}
