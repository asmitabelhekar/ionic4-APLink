import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologiesPage } from './technologies.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: TechnologiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  
IonicModule],
  exports: [RouterModule],
})
export class TechnologiesPageRoutingModule {}
