import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs';

import { Tarefas } from '../tarefas'
import { TarefasService } from '../../tarefas.service';
import { Usuario } from 'src/app/usuarios/usuario';

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrls: ['./tarefas-form.component.css']
})

export class TarefasFormComponent implements OnInit {

  tarefa: Tarefas;
  success: boolean = false;
  errors: String [];
  id: number;

  users: Usuario[] =[];

  constructor( 
    private service: TarefasService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
    ) { 
    this.tarefa = new Tarefas();
  }

  ngOnInit() : void {
    this.service.getUsuario()
    .subscribe((resp: Usuario[]) => {
      this.users = resp;
    });

    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
        .getTarefaById(this.id)
        .subscribe(
          response => this.tarefa = response ,
          errorResponse => this.tarefa = new Tarefas ()
          )
      }
    })
  }

  onSubmit() {
    if(this.id) {
      this.service
      .atualizar(this.tarefa)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      
        } , errorResponse => {
          this.errors = ['Erro ao atualizar o tarefa.']
        })

    } else {
      console.log(this.tarefa.dataFim)
      console.log(this.users.values)
      this.service
      .salvar(this.tarefa)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.tarefa = response
      } , errorResponse => {
        this.success = false;
      this.errors = errorResponse.error.errors;
      }
    )
    }    
  }

  voltarParaListagem() {
    this.router.navigate(['/tarefas-lista']);
  }
}