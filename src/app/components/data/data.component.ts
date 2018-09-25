import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

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
    email: 'some@some.com'
  };

  constructor() { 

    console.log(this.user);

    this.forma = new FormGroup({

      'fullName': new FormGroup({
        'name': new FormControl('', [Validators.required, Validators.minLength(3)] ),
        'lastName': new FormControl('', Validators.required)
      }),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    })



  }


  saveChanges(){
    console.log(this.forma.value);
  }

  ngOnInit() {
  }

}
