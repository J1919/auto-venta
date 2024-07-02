import {Injectable} from '@angular/core';
import {Vehiculo} from '../utilitarios/Modelos/vehiculo';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = 'http://epico.gob.ec/vehiculo/public/api';

  constructor(private http: HttpClient) {
  }

  getVehiculos(pagina: number = 1, rows: number = 3, filtro: string = ''): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', pagina.toString());
    params = params.append('rows', rows.toString());

    if (filtro) {
      params = params.append('filtro', filtro);
    }

    return this.http.get<any>(`${this.apiUrl}/vehiculos/`, {params});
  }

  getvehiculo(codigo: string): Observable<any | undefined> {
    const url = `${this.apiUrl}/vehiculo/${codigo}`;
    return this.http.get<any>(url);
  }

  addvehiculo(vehiculo: Vehiculo) {
    return this.http.post<any>(`${this.apiUrl}/vehiculo/`, vehiculo);
  }

  eliminarVehiculo(codigo: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/vehiculo/${codigo}`);
  }

  actualizarVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.put<Vehiculo>(`${this.apiUrl}/vehiculo/${vehiculo.codigo}`, vehiculo);
  }

}