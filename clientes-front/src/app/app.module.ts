import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { UsuarioModule } from './usuarios/usuario.module'; 
import { UsuariosService } from './usuarios.service'; 

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TarefasService } from './tarefas.service';
import { TarefasModule } from './tarefas/tarefas.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    UsuarioModule,
    TarefasModule,
    Ng2SearchPipeModule
  ],
  providers: [
    UsuariosService,
    TarefasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
