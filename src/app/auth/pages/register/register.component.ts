import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'

  myForm: FormGroup = this.fb.group({
    'name': ['', [ Validators.required, Validators.pattern( this.nameAndLastnamePattern ) ]]
  })

  constructor(
    private fb: FormBuilder
  ){}

  isNoValidField( field: string ){
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched
  }

}
