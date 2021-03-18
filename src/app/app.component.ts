import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  easyForm: FormGroup;
  constructor(private fbuilder: FormBuilder) {}
  ngOnInit(): void {
    this.easyForm = this.fbuilder.group({
      username: 'đì fau',
      password: 'none',
      subjects: this.fbuilder.group({
        Angular: false,
        ASPNETCore: false,
      }),
    });
  }

  onSubmit() {
    console.log(this.easyForm);
  }
}
