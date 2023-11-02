import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from 'src/envioroments/enviroments';
import { Cargo } from '../Type/Type';

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  private url: string = enviroments.URL+"api/Cargos/";

  constructor(private http: HttpClient) {   }
  
  getCargo(): Observable<Cargo[]>{ 
    return this.http.get<Cargo[]>(this.url)
  }

}
