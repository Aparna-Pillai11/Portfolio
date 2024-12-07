import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name = 'HEY, MY NAME IS APARNA SIVAN PILLAI';
  description = `I am a passionate frontend developer with over 7 years of expertise in Angular, Typescript, HTML/Css, Javascript, Tailwind Css
                 and cutting-edge technologies. I love building scalable applications and solving complex problems.`;
  linkedInUrl = 'https://www.linkedin.com/in/aparna-s-pillai-77b442217';
}
