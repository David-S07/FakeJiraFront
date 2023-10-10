import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Tarefas } from '../tarefas';
import { TarefasService } from '../../tarefas.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-tarefas-lista',
  templateUrl: './tarefas-lista.component.html',
  styleUrls: ['./tarefas-lista.component.css']
})
export class TarefasListaComponent implements OnInit {

  tarefas : Tarefas[] = [];
  tarefaSelecionado: Tarefas;
  mensagemSucesso: string;
  mensagemErro: string;

  _filter: string;
  _filterTipo: string;
  filteredTarefas:  Tarefas[] = [];

  constructor(private service: TarefasService, private router: Router) {  
   }
   
  ngOnInit(): void {
    this.service.getTarefa()
    .subscribe((resp: Tarefas[]) => {
      this.tarefas = resp;
      this.filteredTarefas = resp;
    });
  }
  
  novoCadastro() {
    this.router.navigate(['/tarefas-form'])
  }

  preparaDelecao(tarefa: Tarefas) {
    this.tarefaSelecionado = tarefa;
  }

  deletarTarefa() {
    this.service
    .deletar(this.tarefaSelecionado)
    .subscribe(response => {
      this.mensagemSucesso = 'Tarefa deletado com sucesso ! ' 
      this.ngOnInit();
    },
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar o tarefa. ')
  }


  set filter(value: string) {
    this._filter = value;
    this.filteredTarefas = this.tarefas.filter((tarefa: Tarefas) => tarefa.nomeTarefa.toLocaleLowerCase().indexOf(this._filter.toLocaleLowerCase()) > -1);
  }

  get filter() : string {
    return this._filter;
  }

}
