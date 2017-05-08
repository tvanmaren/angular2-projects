import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaySecret = false;
  displayClicks=[];

  toggleDisplay() {
    this.displaySecret=!this.displaySecret;
    this.displayClicks.push(Date.now());
  }

  getColor(click) {
    return this.displayClicks.indexOf(click)>=4 ? 'blue' : 'white';
  }

  getFont(click) {
    return this.displayClicks.indexOf(click)>=4 ? 'white' : 'black';
  }
}
