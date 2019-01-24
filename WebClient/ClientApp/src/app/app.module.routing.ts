import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/components/home.component";
import { LoginComponent } from './login/components/login.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { RegistrationDistrictComponent } from './registration/components/District/registration-district.component'
import { RegistrationStudentComponent } from './registration/components/Student/registration-student.component'

import { EventRegistrationComponent } from './event-registration/event-registration.component'
import { TournamentComponent } from './registration/components/tournament/tournament.component';
import { TournamentIndexComponent } from './tournament-index/tournament-index.component';
import { TournamentListGridComponent } from './registration/components/tournament-list-grid/tournament-list-grid.component';
import { TournamentVerificationListComponent } from './registration/components/tournament-verification-list/tournament-verification-list.component';
import { AuthGuard } from './_guard/auth.guard';
import { UploadComponent } from './registration/components/Upload/upload.component';
import { CertificateComponent } from './registration/components/certificate/certificate.component';
import { ImportParticipantsComponent } from './import-participants/import-participants.component';
import { ImportWinnersComponent } from './import-winners/import-winners.component';
import { UploadformComponent } from './uploadform/uploadform.component';
import { PrintParticipantsComponent } from './print-participants/print-participants.component';
import { PrintWinnersComponent } from './print-winners/print-winners.component';
import { NocformComponent } from './nocform/nocform.component';
import { TournamentStudentComponent } from './tournament-student/tournament-student.component';
import { DistrictContactComponent } from './district-contact/district-contact.component';
import { ClubRegistrationComponent } from './club-registration/club-registration.component';
import { ClubContactComponent } from './club-contact/club-contact.component';
import { ClubNewsComponent } from './club-news/club-news.component';
import { DistrictNewsComponent } from './district-news/district-news.component';
import { HalloffameComponent } from './halloffame/halloffame.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { PaymentMonthlyComponent } from './payment-monthly/payment-monthly.component';
import { PaymentAffiliationComponent } from './payment-affiliation/payment-affiliation.component';
import { NationalNewsComponent } from './national-news/national-news.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { EventComponent } from './event/event.component';
import { StateContactComponent } from './state-contact/state-contact.component';
import { CareerComponent } from './career/career.component';
import { CouncilingComponent } from './counciling/counciling.component';
import { GalleryComponent} from './gallery/gallery.component';
import {ChennaiComponent} from './gallery/chennai/chennai.component';
import {KancheepuramComponent} from './gallery/kancheepuram/kancheepuram.component';
import {MaduraiComponent} from './gallery/madurai/madurai.component';
import {TheniComponent} from './gallery/theni/theni.component';
import {NationalComponent} from './gallery/national/national.component';
import { StateComponent} from './gallery/state/state.component';
import {ConstructionComponent} from './construction/construction.component';
import {ChennaiContactComponent} from './district-contact/chennai-contact/chennai-contact.component';
import {DharmapuriContactComponent} from './district-contact/dharmapuri-contact/dharmapuri-contact.component';
import {KancheepuramContactComponent} from './district-contact/kancheepuram-contact/kancheepuram-contact.component';
import {MaduraiContactComponent} from './district-contact/madurai-contact/madurai-contact.component';
import {NamakkalContactComponent} from './district-contact/namakkal-contact/namakkal-contact.component';
import {RamanathapuramContactComponent} from './district-contact/ramanathapuram-contact/ramanathapuram-contact.component';
import {TheniContactComponent} from './district-contact/theni-contact/theni-contact.component';
import { TirunelveliContactComponent} from './district-contact/tirunelveli-contact/tirunelveli-contact.component';
import { TrichyContactComponent} from './district-contact/trichy-contact/trichy-contact.component';
import {ThanjavurComponent} from './gallery/thanjavur/thanjavur.component';
import { RamanathapuramGalleryComponent } from './gallery/ramanathapuram-gallery/ramanathapuram-gallery.component';
import {LaunchComponent} from './launch/launch.component';
import {KarurComponent} from './gallery/karur/karur.component';
import {News1Component} from './district-news/news1/news1.component';
import {News2Component} from './district-news/news2/news2.component';
import {News3Component} from './district-news/news3/news3.component';
import {News4Component} from './district-news/news4/news4.component';
import {VillupuramComponent} from './gallery/villupuram/villupuram.component';
import {Team1Component} from './halloffame/team1/team1.component';
import {Team2Component} from './halloffame/team2/team2.component';
import {Team3Component} from './halloffame/team3/team3.component';
import {Team4Component} from './halloffame/team4/team4.component';
 
 


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'District', component: RegistrationDistrictComponent, canActivate: [AuthGuard] },
    { path: 'student', component: RegistrationStudentComponent },
    //{ path: 'Club', component: RegistrationClubComponent, canActivate: [AuthGuard] },
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
    { path: 'tournament-index', component: TournamentIndexComponent },
    { path: 'import-participants', component: ImportParticipantsComponent },
    { path: 'import-winners', component: ImportWinnersComponent },
    { path: 'uploadform', component: UploadformComponent },
    { path: 'print-participants', component: PrintParticipantsComponent },
    { path: 'print-winners', component: PrintWinnersComponent },
    { path: 'nocform', component: NocformComponent },
    { path: 'certificate', component: CertificateComponent },
    { path: 'tournament-index', component: TournamentIndexComponent },
    { path: 'import-participants', component: ImportParticipantsComponent },
    { path: 'import-winners', component: ImportWinnersComponent },
    { path: 'uploadform', component: UploadformComponent },
    { path: 'print-participants', component: PrintParticipantsComponent },
    { path: 'print-winners', component: PrintWinnersComponent },
    { path: 'nocform', component: NocformComponent },
    { path: 'district-contact', component: DistrictContactComponent },
    //{ path: 'tournament-student', component: TournamentComponent },
    { path: 'Club', component: ClubRegistrationComponent },
    //{ path: 'tournament-student', component: TournamentStudentComponent },
    //{ path: 'club-registration', component: ClubRegistrationComponent },
    { path: 'club-contact', component: ClubContactComponent },
    { path: 'club-news', component: ClubNewsComponent },
    { path: 'district-news', component: DistrictNewsComponent },
    { path: 'halloffame', component: HalloffameComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'timeline', component: TimelineComponent },
    { path: 'ecommerce', component: EcommerceComponent },
    //{ path: 'student-registration', component: StudentRegistrationComponent },
    { path: 'payment-monthly', component: PaymentMonthlyComponent },
    { path: 'payment-affiliation', component: PaymentAffiliationComponent },
    { path: 'national-news', component: NationalNewsComponent },
    { path: 'sample-form', component: SampleFormComponent },
    { path: 'events', component: EventComponent },
    { path: 'state-contact', component: StateContactComponent },
    { path: 'career', component: CareerComponent },
    { path: 'counciling', component: CouncilingComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'chennai-gallery', component:ChennaiComponent},
    { path: 'kancheepuram-gallery',component:KancheepuramComponent},
    { path: 'madurai-gallery',component:MaduraiComponent},
    { path: 'theni-gallery',component:TheniComponent},
    { path: 'national-gallery',component:NationalComponent},
    { path: 'state-gallery', component:StateComponent},
    { path: 'under-construction', component:ConstructionComponent},
    { path: 'chennai-contact', component:ChennaiContactComponent},
    { path: 'dharmapuri-contact', component:DharmapuriContactComponent},
    { path: 'kancheepuram-contact', component:KancheepuramContactComponent},
    { path: 'madurai-contact', component:MaduraiContactComponent},
    { path: 'theni-contact',component:TheniContactComponent},
    { path: 'ramanathapuram-contact',component:RamanathapuramContactComponent},
    { path: 'namakkal-contact',component:NamakkalContactComponent},
    { path: 'tirunelveli-contact', component:TirunelveliContactComponent},
    { path: 'trichy-contact', component:TrichyContactComponent},
    { path: 'thanjavur-gallery', component:ThanjavurComponent},
    { path: 'ramanathapuram-gallery',component:RamanathapuramGalleryComponent},
    { path: 'launching-today', component:LaunchComponent},
    { path: 'karur-gallery', component:KarurComponent},
    { path:'district-news1',component:News1Component},
    { path:'district-news2', component:News2Component},
    { path:'district-news3',component:News3Component},
    { path:'district-news4',component:News4Component},
    { path:'villupuram-gallery',component:VillupuramComponent},
    { path: 'team1',component:Team1Component},
    { path: 'team2', component:Team2Component},
    { path: 'team3', component:Team3Component},
    { path: 'team4', component:Team4Component},





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
