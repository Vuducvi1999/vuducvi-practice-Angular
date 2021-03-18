import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-sample',
  templateUrl: './input-sample.component.html',
  styleUrls: ['./input-sample.component.scss'],
})
export class InputSampleComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;

  constructor() {}

  ngOnInit(): void {}
}
