import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { checkInvalidKeyWord } from 'src/app/Directives/check-reserved-keyword.validator';
import { UserDTO } from 'src/app/Models/user.dto';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  user: UserDTO;
  email: FormControl;
  password: FormControl;
  name: FormControl;
  surname1: FormControl;
  surname2: FormControl;
  alias: FormControl;
  birthdate: FormControl;
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.user = new UserDTO('', '', '', '', '', '', new Date());
    this.email = new FormControl(this.user.email, [
      Validators.required,
      checkInvalidKeyWord(/info@uoc.edu/),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]);
    this.password = new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(8),
    ]);

    this.name = new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]);

    this.surname1 = new FormControl(this.user.surname1, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]);

    this.surname2 = new FormControl(this.user.surname2, [
      Validators.minLength(5),
      Validators.maxLength(25),
    ]);

    this.alias = new FormControl(this.user.alias, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
    ]);

    this.birthdate = new FormControl(this.user.birthDate, [
      Validators.required,
    ]);

    this.registerForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
      name: this.name,
      surname1: this.surname1,
      surname2: this.surname2,
      alias: this.alias,
      birthdate: this.birthdate,
    });
  }

  joinNow(): void {
    console.log('User entity');

    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.name = this.name.value;
    this.user.surname1 = this.surname1.value;
    this.user.surname2 = this.surname2.value;
    this.user.alias = this.alias.value;
    this.user.birthDate = this.birthdate.value;

    console.log('Name: ' + this.user.name);
    console.log('Surname1: ' + this.user.surname1);
    console.log('Surname2: ' + this.user.surname2);
    console.log('Alias: ' + this.user.alias);
    console.log('BirthDate: ' + this.user.birthDate);
    console.log('Email: ' + this.user.email);
    console.log('Password: ' + this.user.password);
  }
}
