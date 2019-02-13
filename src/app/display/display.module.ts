import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { VideoComponent } from './video/video.component';
import { TableComponent } from './table/table.component';
import { DisplayRoutingModule } from './display-routing.module';


@NgModule({
  declarations: [DisplayComponent, VideoComponent, TableComponent],
  imports: [
    CommonModule,
    DisplayRoutingModule
  ]
})
export class DisplayModule { }
