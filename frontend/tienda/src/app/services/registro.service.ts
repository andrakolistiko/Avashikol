import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; // cambia si es necesario

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any): Observable<any> {
    const formData = new FormData();
    for (const key in usuario) {
      if (usuario[key] != null) {
        formData.append(key, usuario[key]);
      }
    }
    return this.http.post(this.apiUrl, formData);
  }

  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
