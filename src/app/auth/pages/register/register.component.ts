import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsValidatorService } from '../../../shared/validations/forms-validator.service';
import { nameAndLastnamePattern, emailPattern, cannotBeKevin } from '../../../shared/validations/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  myForm: FormGroup = this.fb.group({
    name      : ['', [ Validators.required, Validators.pattern( this.formsValidatorService.nameAndLastnamePattern ) ]],
    email     : ['', [ Validators.required, Validators.pattern( this.formsValidatorService.emailPattern ) ]],
    username  : ['', [ Validators.required, this.formsValidatorService.cannotBeKevin ]],
    password  : ['', [ Validators.required, Validators.minLength(6) ]],
    password2 : ['', [ Validators.required ] ],
  }, {
    validators: [ this.formsValidatorService.matchPassword('password', 'password2') ]
  })

  constructor(
    private fb: FormBuilder,
    private formsValidatorService: FormsValidatorService
  ){
    this.myForm.reset({
      name      : 'Kevin cuadros',
      email     : 'kecs@gmaol.com',
      username  : 'kevin_cuadros_',
    })
  }

  isNoValidField( field: string ){
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }

    console.log(this.myForm.value)
  }

}
