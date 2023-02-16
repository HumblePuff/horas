import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TimerComponent } from './timer/timer.component';



const routes: Routes = [
  {path: '',    component: ListComponent,   pathMatch: 'full'},
  {path: 'teste',    component: TimerComponent,   pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
