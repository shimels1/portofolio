import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { locale } from '../shared/i18n/en';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  mapMarker: any;
  building: any;
  mobile: any;
  email: any;
  birthday: any;
  badge: any;
  home: any;
  local: any;
  phone: any;
  resume: any;

  constructor() {}

  ngOnInit(): void {
    this.mapMarker = awesom.faMapMarker;
    this.building = awesom.faCity;
    this.email = awesom.faMailBulk;
    this.mobile = awesom.faMobile;
    this.birthday = awesom.faBirthdayCake;
    this.badge = awesom.faGraduationCap;
    this.home = awesom.faLaptopHouse;
    this.phone = awesom.faPhone;
    this.resume = awesom.faFile;
    this.local = locale;
  }

  dowloadPDF() {
    let link = document.createElement('a');
    link.download = 'ShimelsResume.pdf';
    link.href = 'assets/file/ShimelsResume.pdf';
    link.click();
  }
}
