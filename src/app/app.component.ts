import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  multilClassBinding = {
    txtLinethrough: true,
    fontSizeBig: true,
    txtItalic:true,
    changeColor:true
  }
}
