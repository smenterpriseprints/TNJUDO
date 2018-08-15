import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component'
import {AppModuleRouting} from './app.module.routing'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {FormsModule,ReactiveFormsModule,FormBuilder,FormGroup } from '@angular/forms'
import {LoginComponent} from './login/components/login.component'
import {RegistrationDistrictComponent} from './registration/components/registration-district.component'
import {HttpHelper} from './Shared/Services/http-helper.service'
import {RegistrationDistrictService} from './registration/Service/registration-district.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventRegistrationComponent } from './event-registration/event-registration.component'
import {RegistrationMapComponent} from './registration/components/Map/registrataion-map.component'
import {CustomTextBoxComponent} from './Shared/custom-textbox/custom-textbox.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationDistrictComponent,
    RegistrationMapComponent,
    EventRegistrationComponent,
    CustomTextBoxComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule, 
    HttpModule,   
    FormsModule,       
    ReactiveFormsModule,
    RouterModule,
    AppModuleRouting,
    BrowserAnimationsModule,
   // FormGroup
    //ToasterModule
  ],
  providers: [HttpHelper,RegistrationDistrictService],
  bootstrap: [AppComponent]
})
export class AppModule { }
