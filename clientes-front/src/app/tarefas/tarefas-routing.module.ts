import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefasFormComponent } from './tarefas-form/tarefas-form.component'
import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component';

const routes: Routes = [
  { path: 'tarefas-form' , component: TarefasFormComponent},
  { path: 'tarefas-form/:id' , component: TarefasFormComponent},
  { path: 'tarefas-lista' ,  component: TarefasListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
