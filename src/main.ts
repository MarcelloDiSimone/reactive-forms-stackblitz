import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormComponent } from './app/form/form';

@Component({
  selector: 'app-root',
  imports: [FormComponent],
  template: `
    <app-form></app-form>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
