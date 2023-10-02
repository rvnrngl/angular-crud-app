import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { ValidateService } from '../services/validate.service';
import { NavbarService } from '../services/navbar.service';
import {
  bounceInUpOnEnterAnimation,
  bounceInDownOnEnterAnimation,
  bounceOutDownOnLeaveAnimation,
} from 'angular-animations';

export type userProps = {
  name: string;
  email: string;
  message: string;
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  animations: [bounceInUpOnEnterAnimation(), bounceOutDownOnLeaveAnimation()],
})
export class FormComponent implements OnInit {
  inputName: string = '';
  inputEmail: string = '';
  inputMessage: string = '';

  users: Array<userProps> = [];

  errorMessage: string | null = null;
  successMessage: string | null = null;

  isSubmitted: boolean = false;

  timeout: number = 3000;

  constructor(
    public nav: NavbarService,
    private api: RestApiService,
    private validate: ValidateService,
  ) {
    this.users = this.api.getAllUsers();
    this.isSubmitted = this.users.length > 0;
  }

  ngOnInit(): void {
    this.nav.show();
  }

  onSubmit(): void {
    this.errorMessage = null;
    this.successMessage = null;
    if (this.isValidName(this.inputName)) {
      if (this.isValidEmail(this.inputEmail)) {
        if (this.isEmailUnique(this.inputEmail)) {
          this.isSubmitted = true;
          this.api.insertUser({
            name: this.inputName,
            email: this.inputEmail,
            message: this.inputMessage,
          });
          this.successMessage = 'Form submitted successfully!';
          // deelete message after 3 sec
          setTimeout(() => {
            this.successMessage = null;
          }, this.timeout);
        } else {
          this.errorMessage = 'Email is already taken.';
          setTimeout(() => {
            this.errorMessage = null;
          }, this.timeout);
        }
      } else {
        this.errorMessage = 'Enter a valid email.';
        setTimeout(() => {
          this.errorMessage = null;
        }, this.timeout);
      }
    } else {
      this.errorMessage = 'Enter a valid name.';
      setTimeout(() => {
        this.errorMessage = null;
      }, this.timeout);
    }
  }

  isValidName(name: string): boolean {
    return this.validate.Name(name);
  }

  isValidEmail(email: string): boolean {
    return this.validate.Email(email);
  }

  isEmailUnique(email: string): boolean {
    const isNotUnique = this.users.some((user) => user.email === email);
    return !isNotUnique;
  }

  onMessageClose(): void {
    this.errorMessage = null;
    this.successMessage = null;
  }
}
