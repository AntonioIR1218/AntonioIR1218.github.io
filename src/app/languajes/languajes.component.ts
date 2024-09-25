import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-languajes',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './languajes.component.html',
  styleUrl: './languajes.component.css'
})
export class LanguajesComponent {
  languages: Array<{name: string, level: string}> = [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Basico' }
  ];

}
