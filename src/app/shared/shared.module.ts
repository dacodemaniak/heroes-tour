import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPipe } from './pipes/initial.pipe';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    InitialPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InitialPipe,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
