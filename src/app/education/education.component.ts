import { Component, OnInit } from '@angular/core';
import {Education} from'../Models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
educationList: Education[]=[
  {
    institute : 'Maharishi Markandeshwar University Mullana Ambala',
    course: 'M.Tech(Structure)',
    duration:'2013-2015'

  },
  {
    institute : 'Maharishi Dayanand University',
    course: 'B.Tech(Civil Engineering)',
    duration:'2009-20013'

  },
  {
    institute : 'Polytechnic College',
    course: 'Diploma',
    duration:'2006-2009'

  },
  
  {
    institute : 'Hindu Vidyapeeth School',
    course: 'SSC',
    duration:'2004-2006'

  },
  
 
];
constructor( ) {}
ngOnInit(): void {}
}
