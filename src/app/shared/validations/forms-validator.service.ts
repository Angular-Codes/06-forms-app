import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsValidatorService {

  public nameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  public emailPattern          : string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'

  constructor() { }

  cannotBeKevin = ( control: FormControl ): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if(value === 'kevin'){
      return {
        cannotBeKevin: true
      }
    }
    return null;
  }

  matchPassword = ( controlName: string, matchingControlName: string ) => {

    return ( control: AbstractControl ): ValidationErrors | null => {

      const controlValue = control.get(controlName)?.value;
      const matchingControlValue = control.get(matchingControlName)?.value;

      if(controlValue !== matchingControlValue){
        control.get(matchingControlName)?.setErrors({ notMatchPassword: true })
        return {
          notMatchPassword: true
        }
      }
      control.get(matchingControlName)?.setErrors(null)
      return null;
    }
  }
  
}
