import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPipe } from './pipes/initial.pipe';



@NgModule({
  declarations: [
    InitialPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InitialPipe
  ]
})
export class SharedModule { }
