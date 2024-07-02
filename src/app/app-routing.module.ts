import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PageNotFoundComponent } from './paginas/pageNotFound/pageNotFound.component';
import { PagVehiculoComponent } from './paginas/pagVehiculo/pagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { ClienteRegistroComponent } from './paginas/ClienteRegistro/ClienteRegistro.component';

const routes: Routes = [
{
  path:"home",
  component:HomeComponent
},
{
  path:"vehiculos",
  component:PagListaVehiculosComponent
},
{
  path:"vehiculo",
  component:PagVehiculoRegistroComponent
},
{
  path:"vehiculo/:codigo",
  component:PagVehiculoComponent
},

  {
    path: "cliente",
    component: ClienteRegistroComponent
  },
{
  path:"",
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:"**", //los ** si no cumple los path anteriores se carga este component
  component:PageNotFoundComponent,
  pathMatch:"full"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
