import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TurnoLlamado } from '../model/TurnoLlamado';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(
    private http: HttpClient
  ) {}

  public getTurnos() : Observable<TurnoLlamado[]>{
    return this.http.get<TurnoLlamado[]>('api/turn');
  }

}

