import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaginaModule } from './paginas/PaginaModule';
import { UtilitariosModdule } from './utilitarios/pipes/UtilitariesModule';
import { NavbarComponent } from './navbar/navbar.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UserInterceptor} from "./interceptor/user.interceptor";


@NgModule({
  declarations: [		
    AppComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginaModule,
    UtilitariosModdule,
   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
