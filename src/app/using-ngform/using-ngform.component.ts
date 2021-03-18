import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-using-ngform',
  templateUrl: './using-ngform.component.html',
  styleUrls: ['./using-ngform.component.scss'],
})
export class UsingNgformComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(formSignIn: NgForm) {
    console.log(formSignIn);
  }
}
