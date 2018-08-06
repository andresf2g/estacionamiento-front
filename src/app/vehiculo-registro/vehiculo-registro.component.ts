import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { EstacionamientoService } from '../estacionamiento.service';

@Component({
  selector: 'app-vehiculo-registro',
  templateUrl: './vehiculo-registro.component.html',
  styleUrls: ['./vehiculo-registro.component.css']
})
export class VehiculoRegistroComponent implements OnInit {
  constructor(private estacionamientoService: EstacionamientoService) { }

  vehiculo: Vehiculo = {};

  registrarIngreso(): void {
    this.estacionamientoService.registrarIngresoVehiculo(this.vehiculo).subscribe(resultado => {
      if (resultado) {
        this.vehiculo = {};
      }
    });
  }
  
  ngOnInit() {
  }
}
