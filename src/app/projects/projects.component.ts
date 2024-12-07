import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-projects',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'CCTNS Web Application',
      description: 'Crime and Criminal Tracking Network System developed using JSP.',
      technologies: ['JSP','SQL'],
      link: '', // Optional: Link to GitHub or live demo
    },
    {
      title: 'Smart Mall App for McKinsey',
      description:
        'IoT-based app for smart malls integrating Java, Spring Boot, MQTT, HBase, and AWS.',
      technologies: ['Java', 'Spring Boot', 'MQTT', 'HBase', 'AWS'],
      link: '',
    },
    {
      title: 'Sandbox App',
      description:
        'Sandbox platform leveraging Angular 6 and Microsoft Active Directory for authentication.',
      technologies: ['Angular 6', 'Microsoft AD'],
      link: '',
    },
    {
      title: 'Device Management App for PepsiCo',
      description: 'Device management system using Angular 7.',
      technologies: ['Angular 7','RxJS'],
      link: '',
    },
    {
      title: 'Centreline Management App for Unilever',
      description: 'Audit application for managing production lines using Angular 9 and RxJS.',
      technologies: ['Angular 9', 'RxJS'],
      link: '',
    },
    {
      title: 'MDCS App for Unilever',
      description:
        'KPI management application for multiple products, built with Angular 12.',
      technologies: ['Angular 12','RxJS','Microsoft AD','Reactive Forms'],
      link: '',
    },
    {
      title: 'Work Allocator for BT',
      description: 'Task allocation system using Angular 14.',
      technologies: ['Angular 14', 'Angular Slickgrid','Microsoft AD','D3.js'],
      link: '',
    },
    {
      title: 'Mpro5 Mobile App',
      description:
        'Mobile app for task management using Angular 17, Ionic Framework, Tailwind CSS, and NgRx.',
      technologies: ['Angular 17', 'Ionic Framework', 'Tailwind CSS', 'NgRx'],
      link: '',
    },
  ];
}
