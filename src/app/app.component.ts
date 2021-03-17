import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  addText = '';
  txtContainer = [{ id: '1', txt: 'Default' }];
  addItem(txt) {
    this.txtContainer.push({ id: this.create_UUID(), txt });
    this.addText = '';
  }
  deleteItem(id) {
    this.txtContainer = this.txtContainer.filter((i) => i.id != id);
  }
  create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }
}
