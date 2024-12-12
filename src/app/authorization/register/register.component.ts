import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { RouterLink } from '@angular/router';
import { TextinputComponent } from '../../shared/forms/textinput/textinput.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthLayoutComponent, RouterLink, TextinputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  email: string = '';
}
