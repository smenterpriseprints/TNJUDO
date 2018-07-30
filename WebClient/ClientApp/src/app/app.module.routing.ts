import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/components/home.component";
import { LoginComponent } from './login/components/login.component';
import {RegistrationDistrictComponent} from './registration/components/registration-district.component'


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent },
    { path: 'registration-district',  component: RegistrationDistrictComponent },
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
