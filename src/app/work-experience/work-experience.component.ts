import { Component } from '@angular/core';
import { WorkExperience } from '../Models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
workExpList: WorkExperience[] =[
  {
    role: 'Structure Engineer',
    company: 'Khanna Designer And Consultants Pvt.Ltd.',
    duration:'Apr 2018 - Jan 2022', 
    description :[
      'Complete handling of Design of Structures',
      'Structure include - MJB, MNB, Rcc Girder, VUP, Box Culvet',
    ],
  },
  {
    role: 'Sr. Structure Engineer',
    company: 'Ruky Projects Pvt.Ltd.',
    duration:'Jan 2022 - Nov 2022',
    description :[
      'Detailed Design of Superstructures, substructures and Foundation',
      'Structure include Both Hollow anf Solid circular Pier',
    ],
  },
  {
    role: 'Sr. Structure Engineer',
    company: 'Intercontinental Consultants and Technocrates Pvt.Ltd.',
    duration:'Nov 2022 - to till date',
    description :[
      
    ],
  },
  
];
}
