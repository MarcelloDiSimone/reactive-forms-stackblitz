import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormControlRequiredAttributeDirective } from '../utils/directives/required.directive';
import { ValidationErrorComponent } from '../validation-error/validation-error';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, FormControlRequiredAttributeDirective, ValidationErrorComponent],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class UserComponent implements OnInit {
  private readonly controlContainer = inject(ControlContainer);
  form!: FormGroup;

  get controls(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
  }
}
