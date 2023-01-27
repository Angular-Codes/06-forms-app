import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {

  myForm: FormGroup = this.fb.group({
    'name'      : [ null, [ Validators.required, Validators.minLength(3) ] ],
    'favorites' : this.fb.array( [
      this.fb.control('Kevin', [ Validators.required ]),
      this.fb.control('Cuadros', [ Validators.required ])
    ], [ Validators.required ])
  })

  newFavorite: FormControl = this.fb.control('', [ Validators.required ])

  constructor(
    private fb: FormBuilder
  ) { }

  get favoriteArr(){
    return this.myForm.get('favorites') as FormArray
  }

  
  isFormValid( field: string ){
    return this.myForm.controls[field].invalid 
        && this.myForm.controls[field].touched
  }

  saveData(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }
    console.log(this.myForm.value);
  }

  addFavorite(){
    if( this.newFavorite.invalid ){
      return;
    }
    const { value } = this.newFavorite
    // this.favoriteArr.push( new FormControl( value, [ Validators.required ] ) )
    this.favoriteArr.push( this.fb.control( value, [ Validators.required ] ) )
    this.newFavorite.reset()
  }

  deleteFavorite( index: number ){
    this.favoriteArr.removeAt( index )
  }

}
