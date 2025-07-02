import { Component, computed, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-validation-error',
  imports: [JsonPipe],
  templateUrl: './validation-error.html',
  styleUrl: './validation-error.css',
})
export class ValidationErrorComponent {
  inputField = input.required<AbstractControl>();
  errors = computed(() => this.inputField().errors);
}
