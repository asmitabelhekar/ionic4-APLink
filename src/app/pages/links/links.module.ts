import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinksPageRoutingModule } from './links-routing.module';

import { LinksPage } from './links.page';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDialogModule,
    LinksPageRoutingModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [LinksPage]
})
export class LinksPageModule {}
