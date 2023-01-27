import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

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

  ngOnInit(): void {
    this.myForm.reset({
      'name': 'RTX 4080',
      'price': 1500
    })
  }

  isFieldValid( field: string ){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  save(){
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
