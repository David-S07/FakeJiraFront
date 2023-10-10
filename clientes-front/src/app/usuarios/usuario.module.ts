import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { UsuariosRoutingModule } from './usuario-routing.module';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsuariosFormComponent,
    UsuariosListaComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    UsuariosFormComponent,
    UsuariosListaComponent
  ]
})
export class UsuarioModule { }
