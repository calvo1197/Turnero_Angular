import { Component, OnInit, Input } from '@angular/core';
import { TurnoLlamado } from 'src/app/model/TurnoLlamado';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  @Input() turnos: TurnoLlamado[];

  constructor( private service: DisplayService) { }

  ngOnInit() {

    
  }

}
