import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { locale as english, locale } from '../shared/i18n/en';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  language: any = '';
  local: any;
  constructor() {
    this.local = locale;
  }

  ngOnInit(): void {
    $('.js-scroll-trigger').on('click', function (): void {
      $('.navbar-collapse').toggle();
    });
    $('.nav').on('click', function (): void {
      $('.navbar-collapse').toggle();
    });
  }
}
