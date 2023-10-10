import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Tarefas } from './tarefas/tarefas';
import { Usuario } from './usuarios/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http: HttpClient) {   }

  salvar( tarefas : Tarefas ) : Observable<Tarefas> {
      return this.http.post<Tarefas>('http://localhost:8080/api/tarefas', tarefas)
  }

  atualizar( tarefas : Tarefas ) : Observable<any> {
    return this.http.put<Tarefas>(`http://localhost:8080/api/tarefas/${tarefas.id}`, tarefas)
  }

  getTarefa(): Observable<Tarefas[]> {
      return this.http.get<Tarefas[]>('http://localhost:8080/api/tarefas');
  } 

  getTarefaById(id: number) : Observable<Tarefas> {
    return this.http.get<any>(`http://localhost:8080/api/tarefas/${id}`);
  } 

  deletar(tarefas : Tarefas)  : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/tarefas/${tarefas.id}`);
  }
  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://localhost:8080/api/usuarios');
  } 
}
