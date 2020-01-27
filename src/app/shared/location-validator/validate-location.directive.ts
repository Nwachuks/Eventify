import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appValidateLocation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidateLocationDirective, multi: true }]
})
export class ValidateLocationDirective implements Validator {

  constructor() { }

  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countryControl = formGroup.controls['country'];
    const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if ((addressControl && addressControl.value && cityControl && cityControl.value
      && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
      return null;
    } else {
      return { appValidateLocation: false };
    }
  }
}
