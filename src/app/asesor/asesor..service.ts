import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from '../model/report.model';
import { Observable } from 'rxjs/internal/Observable';
import { TurnoLlamado } from '../model/TurnoLlamado';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  constructor(
    private http: HttpClient
  ) {}

  public getReport(idASesor: String) : Observable<Report>{
    return this.http.post<Report>('api/adviser/report/' + idASesor,null);
  }

  public nextUser(idAsesor: String): Observable<TurnoLlamado>{
    return this.http.post<TurnoLlamado>('api/adviser/nextTurn/' + idAsesor ,null);
  }

  public llamarPerdido(idAsesor: String): Observable<TurnoLlamado>{
    return this.http.get<TurnoLlamado>('api/adviser/llamarPerdido/'+ idAsesor);
  }

  public terminarTurno(idAsesor: String): Observable<TurnoLlamado>{
    return this.http.get<TurnoLlamado>('api/adviser/end/' + idAsesor);
  }

  public getPerdidos(): Observable<TurnoLlamado[]>{
    return this.http.get<TurnoLlamado[]>('api/adviser/turnosPerdidos')
  }

  public getActual(idAsesor: String): Observable<TurnoLlamado>{
    return this.http.get<TurnoLlamado>('api/adviser/actual/' + idAsesor)
  }
  public reCall(idAsesor: String): Observable<TurnoLlamado>{
    return this.http.get<TurnoLlamado>('api/adviser/reCall/' + idAsesor)
  }
}