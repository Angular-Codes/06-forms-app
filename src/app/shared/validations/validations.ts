import { FormControl } from "@angular/forms";

export const nameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
export const emailPattern          : string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'

export const cannotBeKevin = ( control: FormControl ) => {
  const value = control.value?.trim().toLowerCase();
  if(value === 'kevin'){
    return {
      cannotBeKevin: true
    }
  }
  return null;
}
