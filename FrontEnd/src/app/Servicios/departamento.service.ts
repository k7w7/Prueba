import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from 'src/envioroments/enviroments';
import { Observable } from 'rxjs';
import { Departamento } from '../Type/Type';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private url: string = enviroments.URL+"api/Departamentos";
  constructor(private http: HttpClient) {   }
  
  getDepartamento(): Observable<Departamento[]>{ 
    return this.http.get<Departamento[]>(this.url)
  }

}
