import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {

  @ViewChild('form') form!: NgForm;

  // onSubmit( form: NgForm ){
  //   console.log(form.value);
  // }

  isProductNameValid(): boolean{
    return this.form?.controls['product']?.invalid 
        && this.form?.controls['product']?.touched
  }

  isProductPriceValid(): boolean{
    return this.form?.value?.price <= 0
        && this.form?.controls['price']?.touched
  }

  onSubmit(){
    console.log(this.form);
  }

}
