import { Routes } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { IndexComponent } from './public/index/index.component';
import { RegisterComponent } from './authorization/register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: IndexComponent },
];
