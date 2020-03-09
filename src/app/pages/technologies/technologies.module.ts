import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnologiesPageRoutingModule } from './technologies-routing.module';

import { TechnologiesPage } from './technologies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnologiesPageRoutingModule
  ],
  declarations: [TechnologiesPage]
})
export class TechnologiesPageModule {}
