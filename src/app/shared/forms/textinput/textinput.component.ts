import { Component, HostBinding, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textinput.component.html',
  styleUrl: './textinput.component.css',
})
export class TextinputComponent {
  @Input({ required: true }) name!: string;
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() placeholder: string = '';
}
