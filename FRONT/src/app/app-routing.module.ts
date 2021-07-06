import { DeletarComponent } from './components/views/computador/deletar/deletar.component';
import { CadastrarComponent } from './components/views/computador/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/computador/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    //Listar
  {
    path: '',
    component: ListarComponent
  },
  //Cadastrar
  {
    path: 'computador/cadastrar',
    component: CadastrarComponent
  },
  //Deletar
  {
    path: 'computador/remover/:id',
    component: DeletarComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
