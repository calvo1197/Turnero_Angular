import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsesorRoutingModule } from './asesor-routing.module';
import { AsesorComponent } from './asesor/asesor.component';
import { BotonesComponent } from './botones/botones.component';
import { ReporteComponent } from './reporte/reporte.component';
import { PerdidosComponent } from './perdidos/perdidos.component';
@NgModule({
  declarations: [AsesorComponent, BotonesComponent, ReporteComponent, PerdidosComponent],
  imports: [
    CommonModule,
    AsesorRoutingModule    
  ]
})
export class AsesorModule { }
