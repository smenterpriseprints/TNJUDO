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
import {RegistrationDistrictComponent} from './registration/components/District/registration-district.component'
import {RegistrationStudentComponent} from './registration/components/Student/registration-student.component'
import {RegistrationClubComponent} from './registration/components/Club/registration-club.component'

import {HttpHelper} from './Shared/Services/http-helper.service'
import {RegistrationDistrictService} from './registration/Service/registration-district.service'
import {TournamentRegistrationService} from './registration/Service/tournament-registration.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventRegistrationComponent } from './event-registration/event-registration.component'
import {RegistrationMapComponent} from './registration/components/Map/registrataion-map.component'
import {CustomTextBoxComponent} from './Shared/custom-textbox/custom-textbox.component'
import {TournamentComponent} from './registration/components/tournament/tournament.component'
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import {TournamentListGridComponent} from './registration/components/tournament-list-grid/tournament-list-grid.component'
import { AuthGuard } from "./_guard/auth.guard";
import {BrowserToaster} from "src/app/CommonModules/common"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationDistrictComponent,
    RegistrationStudentComponent,
    RegistrationClubComponent,
    RegistrationMapComponent,
    EventRegistrationComponent,
    CustomTextBoxComponent,
    TournamentComponent,
    jqxGridComponent,
    TournamentListGridComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule, 
    HttpModule,   
    FormsModule,       
    ReactiveFormsModule,
    RouterModule,
    AppModuleRouting,
    BrowserAnimationsModule
  ],
  providers: [HttpHelper,RegistrationDistrictService,TournamentRegistrationService,AuthGuard,BrowserToaster],
  bootstrap: [AppComponent]
})
export class AppModule { }
