import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      username: ['default', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required]],
      subjects: this.fbuilder.group({
        Angular: false,
        ASPNETCore: false,
      }),
    });
  }

  onSubmit() {
    console.log(
      // this.easyForm.get('username').invalid &&
      this.easyForm.get('subjects.Angular').value
    );
  }
}
