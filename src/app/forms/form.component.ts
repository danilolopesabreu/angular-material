import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'form-cmp',
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor( private router: Router ) {
  }

    ngOnInit() {
      
    }
}