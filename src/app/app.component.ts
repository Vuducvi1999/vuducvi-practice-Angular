import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mặc định'
  changeTitle = false
  toogleTitle(){
    this.changeTitle = !this.changeTitle
    this.title = this.changeTitle?"Đã thay đổi":"Mặc định"
  }
}
