import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { EstacionamientoService } from '../estacionamiento.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  constructor(private estacionamientService: EstacionamientoService) { }
  
  vehiculoSeleccionado: Vehiculo;
  placa: string = '';
  
  seleccionarVehiculo(vehiculo: Vehiculo) : void {
    this.vehiculoSeleccionado = vehiculo;
    this.vehiculoSeleccionado.visible = true;
  }

  listarPorPlaca() : void {
    this.estacionamientService.listarVehiculosParqueados(this.placa);
  }

  ngOnInit() {
    this.estacionamientService.listarVehiculosParqueados('');
  }
}
