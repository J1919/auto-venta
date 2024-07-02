import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/Modelos/vehiculo';
import { ActivatedRoute,Router } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-pagVehiculo',
  templateUrl: './pagVehiculo.component.html',
  styleUrls: ['./pagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {

  vehiculo: Vehiculo = {
    codigo: '',
    marca: '',
    modelo: '',
    foto: '',
    anio: 0,
    kilometraje: '0',
    calificacion: 0 
  } ;

  modoEditar: boolean = false;

  constructor(
    private route:ActivatedRoute,
    private vehiculoService: VehiculoService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehiculoService.getvehiculo(params['codigo']).subscribe(data => {
        if (data) {
          console.log('Vehiculo:', data);
          this.vehiculo = data.data;
        }
        if (!this.vehiculo) {
          console.error('Vehículo no encontrado');
          alert('Vehículo no encontrado');
          this.router.navigate(['/vehiculos']);
        }
      });
      // this.vehiculo = this.vehiculoService.getvehiculo(params['codigo']);
    });

    this.route.queryParams.subscribe(queryParams => {
      this.modoEditar = queryParams['modo'] === 'editar';
    });

    console.log('Vehículo:', this.modoEditar);
  }

  imprimir(data: any) {
    console.log('Calificacion:', data)
    this.vehiculo.calificacion = data || 0;

  }

  toggleModoEditar() {
    this.modoEditar = !this.modoEditar;
  }

  guardarCambios() {
    if (!this.vehiculo) {
      console.error('No se encontró el vehículo');
      alert('No se encontró el vehículo');
      return;
    }
   
    // Implementa la llamada al servicio para guardar los cambios aquí
    console.log('Guardando cambios...', this.vehiculo);
    this.vehiculoService.actualizarVehiculo(this.vehiculo).subscribe({
      next: (data) => {
        console.log('Vehículo actualizado', this.vehiculo);
        alert('Vehículo actualizado');
        this.toggleModoEditar(); // Salir del modo de edición
        this.router.navigate(['/vehiculos']);
      },
      error: (error) => {
        console.error('Error al actualizar el vehículo', error);
        alert('Ocurrió un error al actualizar el vehículo');
      }
    });

  }

  


}
