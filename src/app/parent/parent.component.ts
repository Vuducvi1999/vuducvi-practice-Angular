import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  value: number = 100;

  constructor() {}

  ngOnInit(): void {}

  Action(value) {
    this.value += value;
  }
}
