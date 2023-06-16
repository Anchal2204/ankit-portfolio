import { Component } from '@angular/core';
import {Projects} from '../Models/models'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
projects: Projects[] =[
  {
    title: 'NHDP, Rmban-Bnihal (Jammu & Kashmir) – Viaduct, MNB & MJB.',
    technologies: 'Autocad, Staad Pro., Excel',
    description: ['Construction 	of 	balance 	work',
    'value 	addition 	work 	of 	four laning 	of 	part 	of 	Ramban 	to 	Banihal 	section of NH-1a',
  ]
  },
  {
    title: 'NHAI, Dwarka Expressway – Viaduct & Underpass.',
    technologies: 'Autocad, Midas, Excel',
    description: ['Construction 	of 	Dwarka 	expressway 	(package-2) 	in 	the 	state 	of Delhi.', 
  ' Detailed design of Underpasses with sump Room. ',
  ]
  },
  {
    title: ' NHAI, Delhi-Katra– Interchange, Viaduct, MJB, MNB, MNB cum VUP',
    technologies: 'Staad Pro., Midas, Excel',
    description: ['Construction 	of 	four 	lane 	greenfield 	Delhi 	Amritsar 	Katra expressway 	from 	junction 	with 	Patiala 	Bathinda 	Ro(NH-7) 	near 	Bhawanigarh to junction with Ludhiana-Malerkotla Road (SH-11) near Bhogiwal village (km 188+830 to km 255+770) on EPC mode under Bharatmala pariyojna in the state of Punjab' ,
  ' Detailed 	design 	of 	Interchange, 	Viaduct, 	MNB, 	MNB 	cum VUP. ',
  ]
  },
  {
    title: 'NHAI, Malout- Abohar– ROB Approach spans ',
    technologies: 'Autocad, Midas, Excel',
    description: ['Four laning from Malout (design km 45.600, existing km 80.200 of NH-07) via Abohar (design km 77.600, existing km 48.200 of NH-07) to Sadhuwali (design km 33.000, existing km 33.000 of NH-62) design length = 65.000 km in the state of Punjab under Bharatmala pariyojana on hybrid annuity mode (HAM). ', 
  ' Detailed Design of Approach Spans of ROB. ',
  'Superstructure - Includes PSC girder with 20m & 30m Spans.',
  ]
  },
  {
    title: 'NHAI, Jind-Gohana–ROB, VUP, LVUP, SVUP, & MNB.  ',
    technologies: 'Staad Pro., Midas, Excel',
    description: ['4 laning of Jind - Gohana section of NH-352a from design km 0+000 to km 40+601(design length 40.601km) in the state of Haryana', 
  ' Detailed design of Structures and liaison work between Client and Authority. ',
  'Superstructure - Includes PSC girder with 20m & 30m Spans.',
  ]
  },
  {
    title: 'MORTH C/O PWD Chhattisgarh – Upgradation to 2- lanes.  ',
    technologies: 'Staad Pro., Midas, Excel',
    description: ['Rehabilitation 	and 	up-gradation 	to 	two 	lanes 	with 	paved 	shoulders 	from 	km 	531/250 	to 	km 597/946 (kunkuri to cg/jh border section) of NH-78 in the state of Chhattishgarh under NHDP-IV through EPC basis.', 
  ' Complete handling of Design of Structures and Liaison work with client.  ',
  'Structures Include- MJB MNB, VUP, LVUP, Box Culvert',
  ]
  },
  {
    title: 'NHAI, Madhya Pradesh- Widening of road to 2-lanes.  ',
    technologies: 'Staad Pro., Midas, Excel, Autocad',
    description: ['Widening of road to 2-lane with paved shoulder i/c construction of bridge & culverts in km 182 to 266/6 on nh-59a (Indore-Betul Road) in the state of Madhya Pradesh.', 
  ' Complete handling of Design of Structures and Liaison work with client.  ',
  'Structures Include- ROB, MJB, Viaducts, VUP, LVUP, Box Culvert',
  ]
  },


  
]


}
