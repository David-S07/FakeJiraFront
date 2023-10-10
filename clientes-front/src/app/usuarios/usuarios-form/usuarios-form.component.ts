import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs';

import { Usuario } from '../usuario'
import { UsuariosService } from '../../usuarios.service';


@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuario;
  success: boolean = false;
  errors: String [];
  id: number;
  typePeoplePJ: boolean = false;
  typePeople: String;

  constructor( 
    private service: UsuariosService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
    ) { 
    this.usuario = new Usuario();
  }

  ngOnInit() : void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service
        .getUsuarioById(this.id)
        .subscribe(
          response => this.usuario = response ,
          errorResponse => this.usuario = new Usuario ()
          )
      }
    })
  }

  onSubmit() {
    if(this.id) {
      this.service
      .atualizar(this.usuario)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      
        } , errorResponse => {
          this.errors = ['Erro ao atualizar o usuario.']
        })

    } else {
      this.service
      .salvar(this.usuario)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
        this.usuario = response
      } , errorResponse => {
        this.success = false;
      this.errors = errorResponse.error.errors;
      }
    )
    }    
  }

  voltarParaListagem() {
    this.router.navigate(['/usuarios-lista']);
  }
}