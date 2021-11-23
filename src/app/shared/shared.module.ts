import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPipe } from './pipes/initial.pipe';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



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
    ReactiveFormsModule
  ]
})
export class SharedModule { }
