import { Component, inject, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CheckboxData } from '../../main.interface';

export const KEYWORDS: CheckboxData[] = [
  { label: 'Typescript', value: 'ts' },
  { label: 'Javascript', value: 'js' },
  { label: 'Python', value: 'py' },
  { label: 'C++', value: 'cpp' },
  { label: 'Asembler', value: 'asm' },
  { label: 'Perl', value: 'pl' },
];

@Component({
  selector: 'app-keywords',
  imports: [ReactiveFormsModule],
  templateUrl: './keywords.html',
  styleUrl: './keywords.scss',
})
export class KeywordsComponent implements OnInit {
  private readonly controlContainer = inject(ControlContainer);
  form!: FormGroup;

  keywords = KEYWORDS;

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
    this.keywords.map((keyword) => {
      this.form.addControl(keyword.value, new FormControl(false));
    });
  }
}
