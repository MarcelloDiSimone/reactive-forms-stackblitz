import { Directive, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import {
  FormControlName,
  NgControl,
  Validators,
  FormControlDirective,
} from '@angular/forms';

@Directive({
  selector: '[formControl], [formControlName]',
  standalone: true,
})
export class FormControlRequiredAttributeDirective implements OnInit {
  constructor(private elementRef: ElementRef, private ngControl: NgControl) {}

  ngOnInit(): void {
    if (
      (this.ngControl instanceof FormControlName ||
        this.ngControl instanceof FormControlDirective) &&
      this.ngControl.control.hasValidator(Validators.required)
    ) {
      this.elementRef.nativeElement.required = 'true';
    }
  }
}
