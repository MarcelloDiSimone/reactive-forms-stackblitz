import { Component, inject, OnInit } from "@angular/core";
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { MultiFormData } from "../utils/models/main.models";

export const KEYWORDS: MultiFormData[] = [
  { label: "Frontend", value: "fe" },
  { label: "Backend", value: "be" },
  { label: "Fullstack", value: "fs" },
  { label: "Database", value: "db" },
  { label: "DevOps", value: "do" },
  { label: "Hardware", value: "hw" },
];

@Component({
  selector: "app-keywords",
  imports: [ReactiveFormsModule],
  templateUrl: "./keywords.html",
  styleUrl: "./keywords.scss",
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
