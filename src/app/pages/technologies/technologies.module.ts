import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnologiesPageRoutingModule } from './technologies-routing.module';
import { TechnologiesPage } from './technologies.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../service/apiservice/api.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    TechnologiesPageRoutingModule,
    MatCardModule
    
  ],
  providers:[
    ApiService
  ],
  declarations: [TechnologiesPage]
})
export class TechnologiesPageModule {}
