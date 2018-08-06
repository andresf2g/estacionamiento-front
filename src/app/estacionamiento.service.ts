import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Vehiculo } from './vehiculo';
import { MensajeService } from './mensaje.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {  
  constructor(private http: HttpClient, private mensajeService: MensajeService) { }

  vehiculos: Vehiculo[];
  
  private estacionamientUrl = 'http://localhost:8080/estacionamiento';
  
  listarVehiculosParqueados(): void {
    this.http.get<Vehiculo[]>(this.estacionamientUrl + '/listarVehiculosParqueados').subscribe(vehiculos => this.vehiculos = vehiculos);
  }

  registrarIngresoVehiculo(vehiculo: Vehiculo): Observable<[string]> {
    this.limpiarMensajes();
    return this.http.post<[string]>(this.estacionamientUrl + '/registrarIngresoVehiculo', JSON.stringify(vehiculo), httpOptions).pipe(
      tap((resultado: [string]) => { 
        this.mensajeService.agregarExito(resultado[0]);
        this.listarVehiculosParqueados();
      }),
      catchError(this.handleError<[string]>('IngresoVehiculo'))
    );
  }

  registrarEgresoVehiculo(vehiculo: Vehiculo): Observable<[string]> {
    this.limpiarMensajes();
    return this.http.post<[[string]]>(this.estacionamientUrl + '/registrarEgresoVehiculo', JSON.stringify(vehiculo), httpOptions).pipe(
      tap((resultado: [string]) => {
        this.mensajeService.agregarExito(`El valor a pagar es: $${resultado[0]}`);
        this.listarVehiculosParqueados();
      }),
      catchError(this.handleError<[string]>('EgresoVehiculo'))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.error != undefined) {
        this.mensajeService.agregarError(error.error);
      } else {
        console.error(error);
        this.mensajeService.agregarError(error.message);
      }
      return of(result as T);
    };
  }

  private limpiarMensajes() {
    this.mensajeService.limpiarExito();
    this.mensajeService.limpiarError();
  }
}