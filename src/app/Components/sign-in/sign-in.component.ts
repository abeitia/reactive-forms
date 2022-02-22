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
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.user = new UserDTO('', '', '', '', '', '', new Date());
    this.email = new FormControl(this.user.email, [
      Validators.required,
      checkInvalidKeyWord(/info@uoc.edu/),
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

    this.registerForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
      name: this.name,
      surname1: this.surname1,
      surname2: this.surname2,
      alias: this.alias,
    });
  }

  joinNow(): void {
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    console.log(
      'User email --> ' +
        this.user.email +
        ' User password --> ' +
        this.user.password
    );
  }
}
