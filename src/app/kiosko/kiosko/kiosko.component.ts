import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria.model';
import { KioskoService } from '../kiosko.service';

@Component({
  selector: 'app-kiosko',
  templateUrl: './kiosko.component.html',
  styleUrls: ['./kiosko.component.css']
})
export class KioskoComponent implements OnInit {

  categorias: Array<Categoria>;
  constructor(private service: KioskoService) { }

  ngOnInit() {
    this.service.getCategorias()
    .subscribe(categorias => {this.categorias = categorias;
    });
    
    

  }
}
