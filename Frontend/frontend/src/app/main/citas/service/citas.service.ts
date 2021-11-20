import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CitaTO } from '../../interfaces/citasto.interface';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url: string = "http://127.0.0.1:1650/api/citas"; //Ruta de conexión con backend

  constructor(private _http: HttpClient) { }

  listarCitas() : Observable<CitaTO[]>{
    return this._http.get<CitaTO[]>(this.url);
  }

  guardarCitas(cita: CitaTO) : Observable<CitaTO>{ //Devuelve un String
    return this._http.post<CitaTO>(this.url,cita);
  }

  actualizarCitas(cita: CitaTO) : Observable<CitaTO>{ //Devuelve un String
    return this._http.put<CitaTO>(this.url,cita);
  }

  eliminarCitas(id: string) : Observable<String>{ //Devuelve un String
    return this._http.delete<String>(this.url + "/" + id);
  }

}
