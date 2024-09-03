import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: Array<any> = [];

  ngOnInit(): void {
    let education1 = {
      fecha: "2015-2019",
      ubicacion: "Ciudad de México",
      titulo: "Ingeniería en Sistemas Computacionales",
      institucion: "Universidad Nacional Autónoma de México (UNAM)"
    };

    let education2 = {
      fecha: "2010-2015",
      ubicacion: "Guadalajara",
      titulo: "Bachillerato en Ciencias y Letras",
      institucion: "Preparatoria de Guadalajara"
    };

    this.education.push(education1);
    this.education.push(education2);
    console.log(this.education);
  }
}
