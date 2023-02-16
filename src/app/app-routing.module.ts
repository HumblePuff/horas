import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { HomeComponent } from './pages/home/home.component';
import { MetricasComponent } from './pages/metricas/metricas.component';
import { TimerComponent } from './timer/timer.component';



const routes: Routes = [
  {path: '',    component: HomeComponent,   pathMatch: 'full'},
  {path: 'home',    component: HomeComponent,   pathMatch: 'full'},
  {path: 'list',    component: ListComponent,   pathMatch: 'full'},
  {path: 'teste',    component: TimerComponent,   pathMatch: 'full'},
  {path: 'empresas',    component: EmpresasComponent,   pathMatch: 'full'},
  {path: 'colaboradores',    component: ColaboradoresComponent,   pathMatch: 'full'},
  {path: 'metricas',    component: MetricasComponent,   pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
