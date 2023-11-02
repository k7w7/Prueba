import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from 'src/envioroments/enviroments';
import { Observable } from 'rxjs';
import { Usuario } from '../Type/Type';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = enviroments.URL+"api/Usuarios";
  constructor(private http: HttpClient) {   }
  
  getUsuario(): Observable<Usuario[]>{ 
    return this.http.get<Usuario[]>(this.url)
  }
}
