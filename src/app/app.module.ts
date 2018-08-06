import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { VehiculoDetalleComponent } from './vehiculo-detalle/vehiculo-detalle.component';
import { VehiculoRegistroComponent } from './vehiculo-registro/vehiculo-registro.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    VehiculoDetalleComponent,
    VehiculoRegistroComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
