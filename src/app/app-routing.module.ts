import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LazyComponent} from "./lazy/lazy.component";


const routes: Routes = [
  { path:'/lazy',component:LazyComponent},
  { path:'/girl',component:LazyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
