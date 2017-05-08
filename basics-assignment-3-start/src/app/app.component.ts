import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaySecret = false;
  toggleDisplay() {
    this.displaySecret=!this.displaySecret;
  }
}
