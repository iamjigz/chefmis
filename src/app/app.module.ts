import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';

import { MaterialModule } from './core/material.module';
import { CoreModule } from './core/core.module';
import { PatientsModule } from './patients/patients.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    PatientsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
