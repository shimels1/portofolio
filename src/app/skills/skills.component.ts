import { Component, OnInit } from '@angular/core';
import { locale as english, locale } from '../shared/i18n/en';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: any = {
    technologies: [
      { name: 'Java, Android', percent: 90, remark: 'excellent' },
      { name: 'C#, Asp.Net core API', percent: 90, remark: 'excellent' },
      { name: 'JS', percent: 70, remark: 'very-good' },
      { name: 'Angular', percent: 70, remark: 'very-good' },
      { name: 'Python', percent: 70, remark: 'very-good' },
    ],
    tools: [
      { name: 'Git', percent: 90, remark: 'excellent' },
      { name: 'Office', percent: 90, remark: 'excellent' },
      { name: 'Linux, Windows', percent: 70, remark: 'very-good' },
      { name: 'NGINX', percent: 70, remark: 'very-good' },
      { name: 'Docker, Kubernetes', percent: 50, remark: 'average' },
    ],
    methodologies: [
      { name: 'Scrum', percent: 70, remark: 'very-good' },
      { name: 'Uml', percent: 90, remark: 'excellent' },
      { name: 'Disign Thinking', percent: 70, remark: 'good' },
      { name: 'DevOps', percent: 50, remark: 'average' },
    ],
  };

  local: any;

  constructor() {
    this.local = locale;
  }

  ngOnInit(): void {}
}
