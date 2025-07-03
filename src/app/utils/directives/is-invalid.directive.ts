import { Directive, inject, OnInit, signal } from '@angular/core';
import {
  FormControlDirective,
  FormControlName,
  NgControl,
} from '@angular/forms';

@Directive({
  selector: '[formControl], [formControlName]',
  standalone: true,
  host: {
    '[class.is-invalid]': 'hasError()',
    '[class.is-pending]': 'isPending()',
    '(blur)': 'checkForErrors()',
  },
})
export class FormControlIsInvalidClassDirective implements OnInit {
  private ngControl = inject(NgControl);

  hasError = signal<boolean>(false);
  isPending = signal<boolean>(false);

  ngOnInit() {
    this.ngControl!.statusChanges!.subscribe((value: any) => {
      console.log('valueChanges', value);
      this.isPending.set(value === 'PENDING');
      this.hasError.set(this.ngControl!.control!.invalid);
    });
  }

  checkForErrors() {
    if (
      this.ngControl instanceof FormControlName ||
      (this.ngControl instanceof FormControlDirective &&
        (this.ngControl.control.touched || this.ngControl.control.dirty))
    ) {
      this.hasError.set(this.ngControl!.control!.invalid);
    }
  }
}
