import { Component, inject } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CheckboxData } from '../../main.interface';

export const LANGLUAGES: string[] = [
  'deutsch',
  'english',
  'spanisch',
  'italienisch',
  'französisch',
  'suaheli',
];

@Component({
  selector: 'app-languages',
  imports: [ReactiveFormsModule],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class LanguagesComponent {
  private readonly controlContainer = inject(ControlContainer);
  form!: FormGroup;

  languages = LANGLUAGES;

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
    this.form.addControl(
      'language',
      new FormArray(this.languages.map(() => new FormControl(false)))
    );
  }
}
