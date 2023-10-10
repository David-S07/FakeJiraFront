import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';
import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TarefasFormComponent,
    TarefasListaComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    TarefasFormComponent,
    TarefasListaComponent
  ]
})
export class TarefasModule { }
