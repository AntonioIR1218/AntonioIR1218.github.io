import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { EducationComponent } from './education/education.component';


@Component({ 
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,EducationComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

 export class AppComponent {
   title = 'mycv';
 }