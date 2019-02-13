import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsesorComponent } from './asesor/asesor.component';

const routes: Routes = [
  {
    path: ':idAsesor',
    component: AsesorComponent
  },
  {
    path: '',
    redirectTo: '1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }