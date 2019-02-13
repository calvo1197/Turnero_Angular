import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TurnoLlamado } from 'src/app/model/TurnoLlamado';
import { AsesorService } from '../asesor..service';
import { Report } from 'src/app/model/report.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Asesor } from 'src/app/model/Asesor.model';
import { Categoria } from 'src/app/model/Categoria.model';


@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  adviser: Asesor;
  categoria: Categoria

  @Input() nextTurn: TurnoLlamado;
  @Input() perdido: TurnoLlamado;
  @Input() terminar: TurnoLlamado;
  @Input() actual: TurnoLlamado;
  @Input() perdidos: TurnoLlamado[];
  @Output() report = new EventEmitter<void>();
  
  ;

  idAsesor: String;
  constructor(private service: AsesorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.idAsesor = this.route.snapshot.paramMap.get('idAsesor');

  }
  proximoUsuario() {
    this.service.nextUser(this.idAsesor)
      .subscribe(nextTurn => {
        this.nextTurn = nextTurn;

        if(nextTurn == null){
          this.actual.name = "N/A";
          alert('No hay turnos en espera')
        }

        if (this.actual.name != "N/A") {
          this.perdidos.push(this.actual);
        }
        if (nextTurn != null) {
          this.actual = nextTurn;
        }

        this.idAsesor = this.route.snapshot.paramMap.get('idAsesor');

        this.report.emit();

        console.log(this.nextTurn);
      });
  }
  llamarPerdido() {
    this.service.llamarPerdido(this.idAsesor)
      .subscribe(perdido => {
        this.perdido = perdido;

        if (this.actual.name != "N/A") {
          this.perdidos.push(this.actual);
        }
        // this.perdido = perdido;
        if(perdido != null){
        this.actual = perdido;
        }
        else{
          alert('No hay turnos perdidos');
        }

        console.log(this.perdido);
      });
  }

  terminarTurno() {
    this.service.terminarTurno(this.idAsesor)
      .subscribe(terminar => {
        if(terminar != null){
        this.terminar = terminar;
        this.actual.name = "N/A";
        }
        else {
          alert('Llame primero un turno');
        }
        this.report.emit();

        console.log(this.terminar);
      });

  }

  reCall() {
    this.service.reCall(this.idAsesor)
      .subscribe(actual => {
        if(actual != null){
        this.actual = actual;
        console.log(this.actual);
        }
        else {
          alert('Llame primero un turno');
        }
      });
  }



}
