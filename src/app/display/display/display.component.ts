import { Component, OnInit, Input } from '@angular/core';
import { TurnoLlamado } from 'src/app/model/TurnoLlamado';
import { DisplayService } from '../display.service';
import { interval } from 'rxjs/internal/observable/interval';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  turnos: Array<TurnoLlamado> = [];
  constructor(public service: DisplayService) {
   }

  ngOnInit() {

    setInterval(()=>{
      this.refresh(); },3000); 
  } 

  refresh(){
    this.service.getTurnos()
      .subscribe( turnos => {
        this.turnos = turnos;
        console.log(this.turnos);
      }
    );
  }
}
