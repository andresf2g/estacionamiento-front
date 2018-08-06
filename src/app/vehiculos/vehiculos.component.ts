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
  
  vehiculos: Vehiculo[];
  vehiculoSeleccionado: Vehiculo;
  
  seleccionarVehiculo(vehiculo: Vehiculo) : void {
    this.vehiculoSeleccionado = vehiculo;
  }
  
  listarVehiculos(): void {
    this.estacionamientService.listarVehiculosParqueados().subscribe(vehiculos => this.vehiculos = vehiculos);
  }

  ngOnInit() {
    this.listarVehiculos();
  }
}
