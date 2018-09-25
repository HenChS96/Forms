import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { formArrayNameProvider } from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_name';
import { controlNameBinding } from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  .invalid{
    font-family: "Times New Roman";
    font-size: large;
    font-style: italic;
    color: red;
  }
  `]
})
export class DataComponent implements OnInit {

  forma: FormGroup;
  user = {
    fullName: {
      name: 'Henry',
      lastName: 'Chaves'
    },
    email: 'some@some.com',
    hobbies: ['Run','Sleep','Play']
  };

  constructor() { 

    console.log(this.user);

    this.forma = new FormGroup({

      'fullName': new FormGroup({
        'name': new FormControl('', [Validators.required, Validators.minLength(3)] ),
        'lastName': new FormControl('', [Validators.required, this.nosomeLastName])
      }),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'hobbies': new FormArray([ new FormControl('Run', Validators.required )]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
      
    });

   //  this.forma.setValue( this.user );

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.passVal.bind(this.forma)
    ])

  }


  saveChanges(){
    console.log(this.forma.value);
     // this.forma.reset(this.user);
   
   this.forma.reset({
    fullName:{
      name: '',
      lastName: ''
    },
    email: ''
  });
  }

  addHobbies(){
    (<FormArray>this.forma.controls['hobbies']).push(
      new FormControl('', Validators.required)
    )
  }

  nosomeLastName(control: FormControl): { [s:string]:boolean }  {

    if( control.value === 'Chavez'){
      return {
        nosomelastname: true
      }
    }

    return null;
  
  }

  passVal(control: FormControl): { [s:string]:boolean }  {

    if( control.value !== this.controls['password1'].value){
      return {
        passval: true
      }
    }

    return null;
  
  }

  ngOnInit() {
  }

}
