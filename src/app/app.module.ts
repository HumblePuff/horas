import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimerDisplayPipe } from './pipes/timer-display/timer-display.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { BotaohomeComponent } from './botaohome/botaohome.component';
import { MetricasComponent } from './pages/metricas/metricas.component';
import { EditarComponent } from './pages/editar/editar.component';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerDisplayPipe,
    ListComponent,
    HomeComponent,
    EmpresasComponent,
    ColaboradoresComponent,
    BotaohomeComponent,
    MetricasComponent,
    EditarComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
