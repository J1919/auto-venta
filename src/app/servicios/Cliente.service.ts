import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../utilitarios/Modelos/Cliente";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://epico.gob.ec/vehiculo/public/api';
  constructor(private http: HttpClient) {
  }

  addCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cliente/`, cliente);
  }
}
