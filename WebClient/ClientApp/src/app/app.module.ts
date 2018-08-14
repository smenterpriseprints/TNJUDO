import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component'
import {AppModuleRouting} from './app.module.routing'
import {FormsModule,ReactiveFormsModule } from '@angular/forms'
import {LoginComponent} from './login/components/login.component'
import {RegistrationDistrictComponent} from './registration/components/registration-district.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component'
import {RegistrationMapComponent} from './registration/components/Map/registrataion-map.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationDistrictComponent,
    RegistrationMapComponent,
    EventRegistrationComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    ReactiveFormsModule,
    RouterModule,
    AppModuleRouting,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
