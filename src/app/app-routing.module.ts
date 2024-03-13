import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SecondComponent } from './temp/second-component/second-component.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
   {
      path: 'home',
      component: HomePageComponent
   },
   {
      path: 'second',
      component: SecondComponent,
      canActivate: [authGuard],
      canDeactivate: [],
      canActivateChild: []
   },
   {
      path: '', redirectTo: '/home', pathMatch: 'full'
   },
   {
      path: '**', redirectTo: '/home'
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
