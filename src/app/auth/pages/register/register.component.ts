import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsValidatorService } from '../../../shared/validations/forms-validator.service';
import { nameAndLastnamePattern, emailPattern, cannotBeKevin } from '../../../shared/validations/validations';
import { EmailValidatorService } from '../../../shared/validations/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  myForm: FormGroup = this.fb.group({
    name      : ['', [ Validators.required, Validators.pattern( this.formsValidatorService.nameAndLastnamePattern ) ]],
    email     : ['', [ Validators.required, Validators.pattern( this.formsValidatorService.emailPattern ) ], [ this.emailValidator ]],
    username  : ['', [ Validators.required, this.formsValidatorService.cannotBeKevin ]],
    password  : ['', [ Validators.required, Validators.minLength(6) ]],
    password2 : ['', [ Validators.required ] ],
  }, {
    validators: [ this.formsValidatorService.matchPassword('password', 'password2') ]
  })

  get errorEmail(): string {
    const errors = this.myForm.get('email')?.errors;
    if      (errors?.['required'])    return 'Email is required'
    else if (errors?.['pattern'])     return 'Email is not valid'
    else if (errors?.['emailTaken'])  return 'Email is already taken'
    return ''
  }


  constructor(
    private fb: FormBuilder,
    private formsValidatorService: FormsValidatorService,
    private emailValidator: EmailValidatorService
  ){
    this.myForm.reset({
      name      : 'Kevin cuadros',
      email     : 'test10@test.com',
      username  : 'kevin_cuadros_',
      password  : '123456',
      password2 : '123456',
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
