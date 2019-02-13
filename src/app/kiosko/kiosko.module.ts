import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KioskoComponent } from './kiosko/kiosko.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { KioskoRoutingModule } from './kiosko-routing,module';
//import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [KioskoComponent, CategoriaComponent],
  imports: [
    CommonModule,
    KioskoRoutingModule
  ]
})
export class KioskoModule { }
