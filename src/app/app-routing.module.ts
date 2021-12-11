import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CONSTANTS} from "./constants";


const routes: Routes = [
  {
    path: CONSTANTS.HOME,
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
