import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'asesor', loadChildren :'./asesor/asesor.module#AsesorModule'},
  {path: 'display', loadChildren: './display/display.module#DisplayModule'},
  {path: 'kiosko', loadChildren: './kiosko/kiosko.module#KioskoModule'},
  {
    path: '',
    redirectTo: 'display',
    pathMatch: 'full'
  }


  // {path: '', component: KioskoComponent},
  // {path: 'pantalla', component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
