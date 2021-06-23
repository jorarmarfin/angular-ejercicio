import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { OctoberAngularService } from './services/october-angular.service';
import { MaestroComponent } from './pages/maestro/maestro.component';
import { DetalleComponent } from './pages/detalle/detalle.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FormulariosComponent,
    MaestroComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ OctoberAngularService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
