import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajesExito: string[] = [];
  mensajesError: string[] = [];

  private agregarMensaje(listadoMensajes: string[], mensaje: string) {
    listadoMensajes.push(mensaje);
  }

  agregarExito(mensaje: string) {
    this.agregarMensaje(this.mensajesExito, mensaje);
  }

  agregarError(mensaje: string) {
    this.agregarMensaje(this.mensajesError, mensaje);
  }
  
  limpiarExito() {
    this.mensajesExito = [];
  }

  limpiarError() {
    this.mensajesError = [];
  }

  constructor() { }
}
