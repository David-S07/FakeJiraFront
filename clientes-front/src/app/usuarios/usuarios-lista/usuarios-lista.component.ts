import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Usuario } from '../usuario';
import { UsuariosService } from '../../usuarios.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarios : Usuario[] = [];
  usuarioSelecionado: Usuario;
  mensagemSucesso: string;
  mensagemErro: string;

  _filter: string;
  _filterTipo: string;
  filteredUsuarios:  Usuario[] = [];

  constructor(private service: UsuariosService, private router: Router) {  
   }
   
  ngOnInit(): void {
    this.service.getUsuario()
    .subscribe((resp: Usuario[]) => {
      this.usuarios = resp;
      this.filteredUsuarios = resp;
    });
  }
  
  novoCadastro() {
    this.router.navigate(['/usuarios-form'])
  }

  preparaDelecao(usuario: Usuario) {
    this.usuarioSelecionado = usuario;
  }

  deletarUsuario() {
    this.service
    .deletar(this.usuarioSelecionado)
    .subscribe(response => {
      this.mensagemSucesso = 'Usuario deletado com sucesso ! ' 
      this.ngOnInit();
    },
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar o usuario. ')
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredUsuarios = this.usuarios.filter((usuario: Usuario) => usuario.nome.toLocaleLowerCase().indexOf(this._filter.toLocaleLowerCase()) > -1);
  }

  get filter() : string {
    return this._filter;
  }

}
