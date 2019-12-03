import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CoreModule { }
