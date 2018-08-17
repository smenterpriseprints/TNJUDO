import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/components/home.component";
import { LoginComponent } from './login/components/login.component';
import {RegistrationDistrictComponent} from './registration/components/District/registration-district.component'
import {RegistrationStudentComponent} from './registration/components/Student/registration-student.component'
import {RegistrationClubComponent} from './registration/components/Club/registration-club.component'

import {EventRegistrationComponent} from './event-registration/event-registration.component'


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent },
    { path: 'District',  component: RegistrationDistrictComponent },
    { path: 'Student',  component: RegistrationStudentComponent },
    { path: 'Club',  component: RegistrationClubComponent },
    { path: 'event',  component: EventRegistrationComponent },
    { path: 'home', component: HomeComponent,
//     children: [           
//         { path: 'registration-district', component: './registration/registration-district.module#RegistrationDistrictModule' },
// ]
}
   
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppModuleRouting { }
