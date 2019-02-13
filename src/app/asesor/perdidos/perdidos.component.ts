import { Component, OnInit, Input } from '@angular/core';
import { AsesorService } from '../asesor..service';
import { TurnoLlamado } from 'src/app/model/TurnoLlamado';

@Component({
  selector: 'app-perdidos',
  templateUrl: './perdidos.component.html',
  styleUrls: ['./perdidos.component.css']
})
export class PerdidosComponent implements OnInit {

  @Input() perdidos: TurnoLlamado[];

  constructor(private service: AsesorService) { }

  ngOnInit() {
  }

}
