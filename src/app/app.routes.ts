import { Routes } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { IndexComponent } from './public/index/index.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: IndexComponent },
];
