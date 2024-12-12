import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthLayoutComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
