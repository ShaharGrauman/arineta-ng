import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ArinetaValidators {
  static imageLinkValidator(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;

      if (!regex.test(value)) {
        return {
          imageLinkValidator: 'Image should start with http:// or https://',
        };
      }
      return null;
    };
  }
}
