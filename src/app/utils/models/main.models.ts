import { FormControl, FormGroup } from '@angular/forms';

export type MultiFormData = {
  label: string;
  value: any;
};

export type UserForm = {
  title: FormControl<string | null>;
  username: FormControl<string | null>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
};

export type AddressForm = {
  address: FormControl<string | null>;
  city: FormControl<string | null>;
  zip: FormControl<string | null>;
  country: FormControl<string | null>;
};

export type KeywordsForm = { [key: string]: FormControl<string | null> };

export type CombinedForm = {
  user: FormGroup<UserForm>;
  address: FormGroup<AddressForm>;
  keywords: FormGroup<KeywordsForm>;
};
