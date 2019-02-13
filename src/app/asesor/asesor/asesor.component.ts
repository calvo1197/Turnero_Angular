import { Component, OnInit, Input } from '@angular/core';
import { AsesorService } from '../asesor..service';
import { Report } from 'src/app/model/report.model';
import { TurnoLlamado } from 'src/app/model/TurnoLlamado';
import { Asesor } from 'src/app/model/Asesor.model';
import { Categoria } from 'src/app/model/Categoria.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html',
  styleUrls: ['./asesor.component.css']
})
export class AsesorComponent implements OnInit {

  reporte: Report = {turns: 0, turnAdviser: 0,
    turnCatA: 0,
    turnCatB: 0,
    turnCatC: 0,
    averageTurn: 0,
    averageTurnCatA: 0,
    averageTurnCatB: 0,
    averageTurnCatC: 0}

    adviser: Asesor;
    categoria: Categoria;
    nextTurn: TurnoLlamado = {
      name: '',
      time: new Date(),
      state: "",
      adviser:  this.adviser,
      category: this.categoria
    }
  actual: TurnoLlamado={
    name: 'N/A',
    time: new Date(),
    state: "",
    adviser:  this.adviser,
    category: this.categoria
  }
  perdidos: TurnoLlamado[];

  idAsesor: String;

  constructor(private service: AsesorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.idAsesor = this.route.snapshot.paramMap.get('idAsesor');

    this.service.getReport(this.idAsesor)
    .subscribe( reporte => {
      this.reporte = reporte;
    });

    setInterval(()=>{
      this.refreshPerdidos(); },3000); 
   
    
  
    this.service.getActual(this.idAsesor)
    .subscribe( actual => {
      if(actual != null){
      this.actual = actual;
      }
      console.log(this.actual);
    });

    
  }

  actualizarReporte(){
    this.service.getReport(this.idAsesor)
    .subscribe( reporte => {
      this.reporte = reporte;
    });
  }

  refreshPerdidos(){
    this.service.getPerdidos()
    .subscribe(perdidos => {
      this.perdidos = perdidos;
    });
  }



}
