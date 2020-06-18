import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from '../comp1/comp1.component';


const routes: Routes = [

  {
    path:'',
    component:Comp1Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModRoutingModule { }
