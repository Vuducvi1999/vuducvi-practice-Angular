import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Output() Action = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  Desc() {
    this.Action.emit(-1);
  }
  Asc() {
    this.Action.emit(1);
  }
}
