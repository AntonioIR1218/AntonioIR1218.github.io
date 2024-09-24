import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'] 
})
export class SkillsComponent {
  skills: Array<string> = [
    "Lenguajes de programación", "Desarrollo web",
    "Creatividad", "Comunicación", "Gestión del tiempo",
    "Persistencia", "Convertir ideas en empresas", 
    "Pensamiento a largo plazo"
  ];
}

