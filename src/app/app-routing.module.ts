import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginListComponent } from './login-list/login-list.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
