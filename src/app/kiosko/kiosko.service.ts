import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Categoria } from '../model/Categoria.model';
import { TurnoLlamado } from '../model/TurnoLlamado';

@Injectable({
  providedIn: 'root'
})
export class KioskoService {

  private categoriasURL= '/api/category';

  constructor(
    private http: HttpClient
  ) {}

  public getCategorias() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(
      this.categoriasURL);
  }

  public getTurno(id: number) : Observable<TurnoLlamado>{
    return this.http.post<TurnoLlamado>('/api/turn',id);
  }

  
}
