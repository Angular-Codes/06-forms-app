import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

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
  
}
