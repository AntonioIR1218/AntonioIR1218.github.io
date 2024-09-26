import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements = [
    {
      title: '53rd Richest person in the world - Forbes',
      year: 2018,
      description: ''
    },
    {
      title: '21st on the Forbes list of The World\'s Most Powerful People',
      year: 2016,
      description: ''
    },
    {
      title: 'IEEE Honorary Membership',
      year: 2015,
      description: 'Given to people who have rendered meritorious service to humanity in the IEEE\'s designated fields of interest.'
    },
    {
      title: 'Businessperson of The Year by Fortune Magazine',
      year: 2013,
      description: ''
    },
    {
      title: 'FAI Gold Space Medal',
      year: 2010,
      description: 'One of the highest honors in the aerospace industry shared with prominent personalities like Neil Armstrong and John Glenn.'
    },
    {
      title: 'Honorary Doctorate in Design from the Art Center College of Design',
      year: null,
      description: ''
    },
    {
      title: 'Honorary Doctorate (DUniv) in Aerospace Engineering from the University of Surrey',
      year: null,
      description: ''
    },
    {
      title: 'Honorary Doctorate of Engineering and Technology from Yale University',
      year: null,
      description: ''
    }
  ];
}
