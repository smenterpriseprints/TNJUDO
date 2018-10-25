import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/components/home.component";
import { LoginComponent } from './login/components/login.component';
import { RegistrationDistrictComponent } from './registration/components/District/registration-district.component'
import { RegistrationStudentComponent } from './registration/components/Student/registration-student.component'
import { RegistrationClubComponent } from './registration/components/Club/registration-club.component'

import { EventRegistrationComponent } from './event-registration/event-registration.component'
import { TournamentComponent } from './registration/components/tournament/tournament.component';
import { TournamentListGridComponent } from './registration/components/tournament-list-grid/tournament-list-grid.component';
import { AuthGuard } from './_guard/auth.guard'


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'District', component: RegistrationDistrictComponent, canActivate: [AuthGuard] },
    { path: 'Student', component: RegistrationStudentComponent, canActivate: [AuthGuard] },
    { path: 'Club', component: RegistrationClubComponent, canActivate: [AuthGuard] },
    { path: 'event', component: EventRegistrationComponent, canActivate: [AuthGuard] },
    {
        path: 'home', component: HomeComponent,
        //     children: [           
        //         { path: 'registration-district', component: './registration/registration-district.module#RegistrationDistrictModule' },
        // ]
    },
    { path: 'Tournament', component: TournamentComponent, canActivate: [AuthGuard] },
    { path: 'TournamentList', component: TournamentListGridComponent, canActivate: [AuthGuard] }

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
