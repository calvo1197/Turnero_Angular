import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KioskoComponent } from './kiosko/kiosko.component';

const routes: Routes = [
  {
    path: '',
    component: KioskoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KioskoRoutingModule { }
