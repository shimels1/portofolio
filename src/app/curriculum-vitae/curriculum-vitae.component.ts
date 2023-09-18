import { Component, OnInit } from '@angular/core';
import { experiencesEn } from '../api/experiencesEn';
import {
  faPlane,
  faGamepad,
  faVolleyballBall,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import { locale } from '../shared/i18n/en';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css'],
})
export class CurriculumVitaeComponent implements OnInit {
  experiences: any = experiencesEn;
  planeIcon: any;
  gameIcon: any;
  volleyBallIcon: any;
  local: any;
  constructor() {
    this.local = locale;
  }

  ngOnInit(): void {
    this.planeIcon = faBook;
    this.gameIcon = faGamepad;
    this.volleyBallIcon = faVolleyballBall;
  }

  detailOnClick(experience: any) {
    experience.detailIsDisplayed = !experience.detailIsDisplayed;
  }
}
