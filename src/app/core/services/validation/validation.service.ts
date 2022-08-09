import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  commerceNumberValidate(control: FormControl): ValidationErrors | null{
    const commerce = control.value;
    const regex = /^$/

    if(commerce === "" || !regex.test(commerce)){
      control.setErrors({ commerceIncorrect:true });
      return { commerceIncorrect:true }

    }
    control.setErrors(null);
    return null;
  }
}
