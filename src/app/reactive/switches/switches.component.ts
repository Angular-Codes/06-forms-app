import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FormValue {
  gender: string,
  notifications: boolean,
  conditions: boolean
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    'gender'        : [ '', Validators.required ],
    'notifications' : [ false, Validators.required ],
    'conditions'    : [ false, Validators.requiredTrue ],
  })

  person = {
    gender: 'F',
    notifications: true,
  }

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.myForm.reset({...this.person})

    // Suscribe when form change
    this.myForm.valueChanges.subscribe( ( form: FormValue ) => {
      const { conditions, ...rest } = { ...form } as FormValue
      this.person = rest
    })

  }

  savePerson() {
    const { conditions, ...rest } = { ...this.myForm.value } as FormValue
    this.person = rest
  }

}
