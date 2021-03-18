import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  easyForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    subjects: new FormGroup({
      Angular: new FormControl(),
      ASPNETCore: new FormControl(),
    }),
  });
  onSubmit() {
    console.log(this.easyForm);
  }
}
