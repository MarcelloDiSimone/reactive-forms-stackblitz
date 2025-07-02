import { Component, inject, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormControlRequiredAttributeDirective } from '../utils/directives/required.directive';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule, FormControlRequiredAttributeDirective],
  templateUrl: './address.html',
  styleUrl: './address.scss',
})
export class AddressComponent implements OnInit {
  private readonly controlContainer = inject(ControlContainer);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
  }
}
