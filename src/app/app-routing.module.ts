import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { AuthGuard } from 'src/auth.guard';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: ContentComponent},
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-concluido', component: CadastroConcluidoComponent },
  { path: 'home-logada', component: HomeLogadaComponent, canActivate: [AuthGuard] },
  { path: 'acesso-negado', component: AcessoNegadoComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
