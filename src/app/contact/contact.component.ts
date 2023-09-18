import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { locale } from '../shared/i18n/en';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  local: any;
  constructor(private fb: FormBuilder) {
    this.local = locale;
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.email])],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onAddEvent() {}
}
