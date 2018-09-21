import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
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
export class TemplateComponent implements OnInit {

  user = {
    name: null,
    lastName: null,
    email: null,
    country: "",
    sex: "Male",
    accept: false
  };

  sexs = ["Male","Female"];

  countries = [{
    code: 'CR',
    country: 'Costa Rica'
  },
  {
    code: 'PAN',
    country: 'Panama'
  },
  {
    code: 'PORT',
    country: 'Portugal'
  }]

  constructor() { }

  ngOnInit() {
  }

  save( forma:NgForm ){
    console.log('form posted');
    console.log( forma);
    console.log('value: ', forma.value);
  }

}
