import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  renderP = true;
  SubjectContainer = ["Angular","ASP.Net Core","Entity Framework"]
  changeRenderP(){
    this.renderP = !this.renderP;
  }
}
