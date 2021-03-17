import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('child1') child1: ChildComponent;
  @ViewChild('child2') child2: ChildComponent;

  DumbAction(value) {
    this.child1.value += value;
    this.child2.value -= value;
  }
}
