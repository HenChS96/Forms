import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  user = {
    name: 'Henry',
    lastName: 'Chaves',
    email: 'something@something.com'
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
