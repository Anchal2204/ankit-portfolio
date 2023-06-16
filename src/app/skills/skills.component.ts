import { Component } from '@angular/core';
import {Skill} from '../Models/models';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
skills: Skill[]=[
  {
    name: 'Staad Pro.',
    level:'Expert',
    rating: 90,
  },
  {
    name: 'Midas',
    level:'Intermidiate',
    rating: 70,
  },
  {
    name: 'Excel',
    level:'Expert',
    rating: 95,
  },
  {
    name: 'Staad Pro.',
    level:'Expert',
    rating: 90,
  },
  {
    name: 'Autocad',
    level:'Expert',
    rating: 85,
  },
  {
    name: 'Adesc(Oasys)',
    level:'Intermidiate',
    rating: 75,
  },
]
}
