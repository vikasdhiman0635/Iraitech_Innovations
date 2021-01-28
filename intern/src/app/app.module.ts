import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenterComponent } from './Q4/center/center.component';
import { TopLeftComponent } from './Q4/top-left/top-left.component';
import { TopRightComponent } from './Q4/top-right/top-right.component';
import { BottomLeftComponent } from './Q4/bottom-left/bottom-left.component';
import { BottomRigthComponent } from './Q4/bottom-rigth/bottom-rigth.component';
import { PhoneFormComponent } from './Q3/phone-form/phone-form.component';
import { HomeComponent } from './Q2/home/home.component';
import { HomeYComponent } from './Q2/home/home-y/home-y.component';
import { PuzalComponent } from './Q1/puzal/puzal.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterComponent,
    TopLeftComponent,
    TopRightComponent,
    BottomLeftComponent,
    BottomRigthComponent,
    PhoneFormComponent,
    HomeComponent,
    HomeYComponent,
    PuzalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
