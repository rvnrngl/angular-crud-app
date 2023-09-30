import { Component } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { ValidateService } from '../services/validate.service';
import { Router } from '@angular/router';

export type userProps = {
  name: string;
  email: string;
  message: string;
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  inputName: string = '';
  inputEmail: string = '';
  inputMessage: string = '';

  users: Array<userProps> = [];

  errorMessage: string | null = null;
  successMessage: string | null = null;

  isSubmitted: boolean = false;

  constructor(
    private api: RestApiService,
    private validate: ValidateService,
  ) {
    this.users = this.api.getAllUsers();
    this.isSubmitted = this.users.length > 0;
  }

  onSubmit(): void {
    this.errorMessage = null;
    this.successMessage = null;
    if (this.isValidName(this.inputName)) {
      if (this.isValidEmail(this.inputEmail)) {
        if (this.isEmailUnique(this.inputEmail)) {
          this.successMessage = 'Form submitted successfully!';
          this.isSubmitted = true;
          this.api.insertUser({
            name: this.inputName,
            email: this.inputEmail,
            message: this.inputMessage,
          });
        } else {
          this.errorMessage = 'Email is already taken.';
        }
      } else {
        this.errorMessage = 'Enter a valid email.';
      }
    } else {
      this.errorMessage = 'Enter a valid name.';
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
