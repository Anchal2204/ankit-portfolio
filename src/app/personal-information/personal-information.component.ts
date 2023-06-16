import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
myData: string[][]=[
  ['Name', 'Ankit Dahiya'],
  ['DOB', '02/04/1991'],
  ['Work Exp', '5 Years'],
  ['Education', 'M.Tech(2015)'],
  ['Intersets', 'Vollyball'],
  ['Marital Status', 'Married'],
];

aboutMe: string[]=[
  'Hi, I am a Structure Engineer with more than 5 Years of hands on design experience with bridges of varying complexity.',
  'Worked as Senior Structure Engineer in Ruky Projects Pvt. Ltd. on various projects.',
  'Delivered all projects within deadlines. Always eager to learn new technologies for designing. ',
  'Currently, working as Manager of Intercontinental Consultants and Technocrates Pvt. Ltd.',
];
}
