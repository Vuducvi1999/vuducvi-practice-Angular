import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-ngform',
  templateUrl: './using-ngform.component.html',
  styleUrls: ['./using-ngform.component.scss'],
})
export class UsingNgformComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(formSigIn) {
    console.log(formSigIn);
  }
}
