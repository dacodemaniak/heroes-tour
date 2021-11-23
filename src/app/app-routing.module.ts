import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './hero/components/add-hero/add-hero.component';
import { HomeComponent } from './hero/components/home/home.component';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'home/hero',
      pathMatch: 'full'
    },
    {
      path: 'home/hero',
      component: HomeComponent,
    },
    {
      path: '**',
      redirectTo: 'home/hero',
      pathMatch: 'full'
    }
  ];
}