import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  allParams = {};
  allQuery = {};
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.allParams = this.route.snapshot.params;
    this.allQuery = this.route.snapshot.queryParams;
  }
}
