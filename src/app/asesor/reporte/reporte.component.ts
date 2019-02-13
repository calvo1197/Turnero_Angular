import { Component, OnInit, Input } from '@angular/core';
import { AsesorService } from '../asesor..service';
import { Report } from 'src/app/model/report.model';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  @Input() reporte: Report;

  constructor( private service: AsesorService) { }

  ngOnInit() {
  }

}
