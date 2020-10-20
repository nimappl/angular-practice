import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaySecret: boolean = false;
  clicksLog: number[] = [];

  addToLog(): void {
    this.displaySecret = !this.displaySecret;
    this.clicksLog.push(this.clicksLog.length + 1);
  }
}
