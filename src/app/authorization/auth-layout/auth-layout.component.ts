import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {
  @Input({ required: true }) title!: string;
}
