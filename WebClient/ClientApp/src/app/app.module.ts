import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component'
import { AppModuleRouting } from './app.module.routing'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms'
import { LoginComponent } from './login/components/login.component'
import { RegistrationDistrictComponent } from './registration/components/District/registration-district.component'
import { RegistrationStudentComponent } from './registration/components/Student/registration-student.component'
import { RegistrationClubComponent } from './registration/components/Club/registration-club.component'

import { HttpHelper } from './Shared/Services/http-helper.service'
import { RegistrationDistrictService } from './registration/Service/registration-district.service'
import { TournamentRegistrationService } from './registration/Service/tournament-registration.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventRegistrationComponent } from './event-registration/event-registration.component'
import { RegistrationMapComponent } from './registration/components/Map/registrataion-map.component'
import { CustomTextBoxComponent } from './Shared/custom-textbox/custom-textbox.component'
import { TournamentComponent } from './registration/components/tournament/tournament.component'
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { TournamentListGridComponent } from './registration/components/tournament-list-grid/tournament-list-grid.component'
import { AuthGuard } from "./_guard/auth.guard";
import { BrowserToaster } from "src/app/CommonModules/common";
import { UploadComponent } from './registration/components/Upload/upload.component';
import { TournamentVerificationListComponent } from './registration/components/tournament-verification-list/tournament-verification-list.component';
import { TournamentNonverifyListComponent } from './registration/components/tournament-nonverify-list/tournament-nonverify-list.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { TournamentIndexComponent } from './tournament-index/tournament-index.component';
import { ImportParticipantsComponent } from './import-participants/import-participants.component';
import { ImportWinnersComponent } from './import-winners/import-winners.component';
import { UploadformComponent } from './uploadform/uploadform.component';
import { PrintParticipantsComponent } from './print-participants/print-participants.component';
import { PrintWinnersComponent } from './print-winners/print-winners.component';
import { NocformComponent } from './nocform/nocform.component';
import { CertificateComponent } from './registration/components/certificate/certificate.component';
import { TournamentStudentComponent } from './tournament-student/tournament-student.component';
import { DistrictContactComponent } from './district-contact/district-contact.component';
import { ClubRegistrationComponent } from './club-registration/club-registration.component';
import { ClubContactComponent } from './club-contact/club-contact.component';
import { ClubNewsComponent } from './club-news/club-news.component';
import { DistrictNewsComponent } from './district-news/district-news.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { HalloffameComponent } from './halloffame/halloffame.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PaymentMonthlyComponent } from './payment-monthly/payment-monthly.component';
import { PaymentAffiliationComponent } from './payment-affiliation/payment-affiliation.component';
import { NationalNewsComponent } from './national-news/national-news.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { ClubService } from './registration/Service/registration-club.service';
import { EventComponent } from './event/event.component';
import { StateContactComponent } from './state-contact/state-contact.component';
import { CareerComponent } from './career/career.component';
import { CouncilingComponent } from './counciling/counciling.component';


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
    TournamentListGridComponent,
    TournamentVerificationListComponent,
    UploadComponent,
    TournamentVerificationListComponent,
    TournamentNonverifyListComponent,
    LoginNewComponent,
    TournamentIndexComponent,
    ImportParticipantsComponent,
    ImportWinnersComponent,
    UploadformComponent,
    PrintParticipantsComponent,
    PrintWinnersComponent,
    NocformComponent,
    CertificateComponent,
    TournamentStudentComponent,
    DistrictContactComponent,
    ClubRegistrationComponent,
    ClubContactComponent,
    ClubNewsComponent,
    DistrictNewsComponent,
    EcommerceComponent,
    HalloffameComponent,
    StudentRegistrationComponent,
    TestimonialsComponent,
    TimelineComponent,
    PaymentMonthlyComponent,
    PaymentAffiliationComponent,
    NationalNewsComponent,
    SampleFormComponent,
    EventComponent,
    StateContactComponent,
    CareerComponent,
    CouncilingComponent
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
  ],
  providers: [HttpHelper, RegistrationDistrictService, TournamentRegistrationService, AuthGuard, BrowserToaster, ClubService],
  bootstrap: [AppComponent]

})
export class AppModule { }
