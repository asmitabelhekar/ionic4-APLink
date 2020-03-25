import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material'
import { PopupComponent } from './component/popup/popup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from './service/apiservice/api.service';
import { HttpClientModule } from '@angular/common/http';
import { PopuplinksComponent } from './popuplinks/popuplinks.component';
import { DeletTechnologiesPopComponent } from './delet-technologies-pop/delet-technologies-pop.component';


@NgModule({
  declarations: [AppComponent, PopupComponent,PopuplinksComponent, DeletTechnologiesPopComponent],
  entryComponents: [PopupComponent,PopuplinksComponent,DeletTechnologiesPopComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
  MatButtonModule],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
