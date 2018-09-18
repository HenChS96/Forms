import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  `]
})
export class TemplateComponent implements OnInit {

  user = {
    name: null,
    lastName: null,
    email: null
  };

  constructor() { }

  ngOnInit() {
  }

  save( forma:NgForm ){
    console.log('form posted');
    console.log('ngform:' + forma);
    console.log('value: ', forma.value);
  }

}
