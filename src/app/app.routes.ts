import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [ { path: '', component:LoginComponent} , {path: 'home', component:MainpageComponent},{path: 'register',component:RegisterComponent} ];
