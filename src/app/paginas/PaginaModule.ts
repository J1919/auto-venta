import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModdule } from "../utilitarios/pipes/UtilitariesModule";
import { PagVehiculoComponent } from "./pagVehiculo/pagVehiculo.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";
import { HttpClientModule } from "@angular/common/http";
import { ClienteRegistroComponent } from "./ClienteRegistro/ClienteRegistro.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModdule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    declarations:[
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        ClienteRegistroComponent
        
    ],
    exports:[
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        ClienteRegistroComponent

    ]

})
export class PaginaModule{}
