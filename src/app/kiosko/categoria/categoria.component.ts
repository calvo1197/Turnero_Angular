import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria.model';
import { KioskoService } from '../kiosko.service';
import { TurnoLlamado } from 'src/app/model/TurnoLlamado';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @Input() categoria: Categoria;
  @Input() turno: TurnoLlamado;
  constructor(private service: KioskoService) { }

  ngOnInit() {

  }

  onClick() {
    this.service.getTurno(this.categoria.id)
    .subscribe((turno: TurnoLlamado) => {
      alert('Imprimiendo el turno' + turno.name)
    })
  }
}
