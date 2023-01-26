import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {

  // myForm: FormGroup = new FormGroup({
  //   'name': new FormControl(''),
  //   'price': new FormControl(),
  //   'stock': new FormControl()
  // })

  myForm: FormGroup = this.fb.group({
    'name'  : [ ''  , [ Validators.required, Validators.minLength(3) ] ],
    'price' : [ null, [ Validators.required, Validators.min(0) ] ],
    'stock' : [ null, [ Validators.required, Validators.min(0) ]]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  isFieldValid( field: string ){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

}
