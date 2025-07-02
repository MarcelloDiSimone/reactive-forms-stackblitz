import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserComponent } from '../user/user';
import { AddressComponent } from '../address/address';
import { KeywordsComponent } from '../keywords/keywords';
import { LanguagesComponent } from '../languages/languages';
import { FormControlRequiredAttributeDirective } from '../utils/directives/required.directive';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    UserComponent,
    AddressComponent,
    KeywordsComponent,
    LanguagesComponent,
  ],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class FormComponent {
  form = new FormGroup({
    user: new FormGroup({
      fistName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    }),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
    }),
    keywords: new FormGroup({}),
  });

  submit() {
    console.log(this.form.value);
  }
}
