import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills: string[] = [
    'Angular (6-17)',
    'Typescript','Javascript','Html','Tailwind Css','Angular Material','Karma/Jasmine','Git','Jira','Confluence','RxJs','Ngrx',
    'Ionic Framework','Agile Methodology','NPM','SonarQube','Microsoft AD','Angular Slickgrid','Java','Springboot','SQL','Hbase','MQTT','Jsp'
    
  ];
}
