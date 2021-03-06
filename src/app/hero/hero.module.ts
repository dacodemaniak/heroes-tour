import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroToolbarComponent } from './components/hero-toolbar/hero-toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeroToolbarComponent,
    HomeComponent,
    AddHeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    AddHeroComponent
  ]
})
export class HeroModule { }
