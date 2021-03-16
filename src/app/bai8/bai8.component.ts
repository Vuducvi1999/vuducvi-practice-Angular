import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai8',
  templateUrl: './bai8.component.html',
  styleUrls: ['./bai8.component.scss']
})
export class Bai8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // là 1 life cycle của angular
    // chạy sau hàm contructor
    // khá giống với useEffect trong ReactJS
    // dùng để lấy api từ web
  }

}
