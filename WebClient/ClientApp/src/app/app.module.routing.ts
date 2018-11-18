import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/components/home.component";
import { LoginComponent } from './login/components/login.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { RegistrationDistrictComponent } from './registration/components/District/registration-district.component'
import { RegistrationStudentComponent } from './registration/components/Student/registration-student.component'
import { RegistrationClubComponent } from './registration/components/Club/registration-club.component'

import { EventRegistrationComponent } from './event-registration/event-registration.component'
import { TournamentComponent } from './registration/components/tournament/tournament.component';
import {TournamentIndexComponent} from './tournament-index/tournament-index.component';
import { TournamentListGridComponent } from './registration/components/tournament-list-grid/tournament-list-grid.component';
import { TournamentVerificationListComponent } from './registration/components/tournament-verification-list/tournament-verification-list.component';
import { AuthGuard } from './_guard/auth.guard';
import { UploadComponent } from './registration/components/Upload/upload.component';
import {ImportParticipantsComponent} from './import-participants/import-participants.component';
import {ImportWinnersComponent} from './import-winners/import-winners.component';
import {UploadformComponent} from './uploadform/uploadform.component';
import {PrintParticipantsComponent} from './print-participants/print-participants.component';
import {PrintWinnersComponent} from './print-winners/print-winners.component';
import {NocformComponent} from './nocform/nocform.component';


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
    { path: 'Tournament', component: TournamentComponent },
    { path: 'TournamentList', component: TournamentListGridComponent },
    { path: 'VerificationList', component: TournamentVerificationListComponent },
    { path: 'Upload', component: UploadComponent },
    { path: 'login-new', component: LoginNewComponent },
    { path: 'tournament-index',component:TournamentIndexComponent},
    { path: 'import-participants',component:ImportParticipantsComponent},
    { path: 'import-winners',component:ImportWinnersComponent},
    { path: 'uploadform',component:UploadformComponent},
    { path: 'print-participants',component:PrintParticipantsComponent},
    { path: 'print-winners',component:PrintWinnersComponent},
    { path: 'nocform',component:NocformComponent}


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
