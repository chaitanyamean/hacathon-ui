import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrComponent } from '../hr-dashboard/hr-dashboard.component';

const routes: Routes = [
  { path: 'hr',  component: HrComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HrRoutingModule { }