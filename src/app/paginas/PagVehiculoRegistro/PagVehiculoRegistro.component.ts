import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/Modelos/vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, Form, FormBuilder, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

 
  formulario:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private VehiculoService:VehiculoService,
    private router:Router,
    
  ) { 
      this.formulario =this.formBuilder.group({
      codigo:['',[Validators.required, validadorCodigo()]],
      marca: ['',[Validators.required]],
      color:['',[Validators.required]],
      modelo:['',[Validators.required]],
      kilometraje:['',[Validators.required]],
      precio:[],
      foto: ['',[Validators.required]],
      year:['',[Validators.required]],
      calificacion:['',[Validators.required]],

    });
  }


  ngOnInit() {
   
  }
  guardar() {
    if (!this.formulario.valid) {
      console.log('Formulario inválido');
      this.formulario.markAllAsTouched();
    } else {
      let vehiculo: Vehiculo = {...this.formulario.value};
      this.VehiculoService.addvehiculo(vehiculo).subscribe(data => {
        console.log('Data:', data);
        if (!data) {
          alert('Error al guardar');
          return;
        }
      });
      console.log('Formulario', this.formulario.value);
      this.router.navigate(['/vehiculos']);
    }
  }

  
}

export function validadorCodigo(): ValidatorFn {
  return (control:AbstractControl):ValidationErrors|null => {
    const codigoV = /^[A-Z]\d{4}$/; //4 digitos
    let value =control.value;
    if(codigoV.test(value)){
      return null;
    }
    return {'codigo validate':true}
  }
  
}