import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaestroComponent } from './pages/maestro/maestro.component';

const routes: Routes = [
  { path:'inicio', component: InicioComponent },
  { path:'formulario', component: FormulariosComponent },
  { path:'maestro', component: MaestroComponent },
  { path:'detalle/:id', component: DetalleComponent }
  //{ path:'**', pathMatch:'full', redirectTo:'inicio' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
