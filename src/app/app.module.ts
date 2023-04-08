import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { IconosComponent } from './iconos/iconos.component';
import { GeneralidadesComponent } from './generalidades/generalidades.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { MasInformacionComponent } from './mas-informacion/mas-informacion.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    IconosComponent,
    GeneralidadesComponent,
    ExperienciaComponent,
    ProyectosComponent,
    EducacionComponent,
    SoftSkillsComponent,
    MasInformacionComponent,
    HttpClient
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
