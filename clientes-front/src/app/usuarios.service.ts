import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Usuario } from './usuarios/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {   }

  salvar( usuario : Usuario ) : Observable<Usuario> {
      return this.http.post<Usuario>('http://localhost:8080/api/usuarios', usuario)
  }

  atualizar( usuario : Usuario ) : Observable<any> {
    return this.http.put<Usuario>(`http://localhost:8080/api/usuarios/${usuario.id}`, usuario)
  }

  getUsuario(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>('http://localhost:8080/api/usuarios');
  } 

  getUsuarioById(id: number) : Observable<Usuario> {
    return this.http.get<any>(`http://localhost:8080/api/usuarios/${id}`);
  } 

  deletar(usuario : Usuario)  : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/usuarios/${usuario.id}`);
}
}
