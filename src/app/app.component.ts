import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentYear: number;
  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
    }
    let lang: any = localStorage.getItem('lang');
  }
}
