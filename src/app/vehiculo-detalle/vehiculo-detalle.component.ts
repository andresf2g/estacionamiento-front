import { Component, OnInit, Input } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { EstacionamientoService } from '../estacionamiento.service';

@Component({
  selector: 'app-vehiculo-detalle',
  templateUrl: './vehiculo-detalle.component.html',
  styleUrls: ['./vehiculo-detalle.component.css']
})
export class VehiculoDetalleComponent implements OnInit {
  constructor(private estacionamientService: EstacionamientoService) { }
  
  @Input() vehiculo: Vehiculo;
  
  registrarSalida(): void {
    this.estacionamientService.registrarSalidaVehiculo(this.vehiculo).subscribe(resultado => {
      if (resultado) {
        this.vehiculo = undefined;
      }
    });
    this.ocultarModal();
  }

  mostrarModal() {
    this.vehiculo.visible = true;
  }

  ocultarModal() {
    this.vehiculo.visible = false;
  }
  
  ngOnInit() {
  }
}
