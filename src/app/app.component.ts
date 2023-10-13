import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../css/basePage.css',
    '../lib/bootstrap/css/bootstrap.min.css'
  ]
})
export class AppComponent {
  title: string = "SelenicSpark"
}
