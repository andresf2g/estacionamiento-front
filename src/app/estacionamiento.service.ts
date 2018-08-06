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
  
  private estacionamientUrl = 'http://localhost:8080/estacionamiento';
  
  listarVehiculosParqueados(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.estacionamientUrl + '/listarVehiculosParqueados');
  }

  registrarIngresoVehiculo(vehiculo: Vehiculo): Observable<[string]> {
    this.limpiarMensajes();
    return this.http.post<[string]>(this.estacionamientUrl + '/registrarIngresoVehiculo', JSON.stringify(vehiculo), httpOptions).pipe(
      tap((resultado: [string]) => this.mostrarExito(resultado[0])),
      catchError(this.handleError<[string]>('IngresoVehiculo'))
    );
  }

  registrarEgresoVehiculo(vehiculo: Vehiculo): Observable<[string]> {
    this.limpiarMensajes();
    return this.http.post<[[string]]>(this.estacionamientUrl + '/registrarEgresoVehiculo', JSON.stringify(vehiculo), httpOptions).pipe(
      tap((resultado: [string]) => this.mostrarExito(`El valor a pagar es: $${resultado[0]}`)),
      catchError(this.handleError<[string]>('EgresoVehiculo'))
    );
  }
  
  private mostrarExito(mensaje: string) {
    this.mensajeService.agregarExito(mensaje);
  }

  private mostrarError(mensaje: string) {
    this.mensajeService.agregarError(mensaje);
  }

  private limpiarMensajes() {
    this.mensajeService.limpiarExito();
    this.mensajeService.limpiarError();
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.error != undefined) {
        this.mostrarError(`${error.error}`);
      } else {
        console.error(error);
        this.mostrarError(`${error.message}`);
      }
      return of(result as T);
    };
  }
}