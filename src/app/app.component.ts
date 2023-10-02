import { HttpClient } from '@angular/common/http';
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
  public user?: User;

  constructor(http: HttpClient) {
    http.get<User>('/auth').subscribe({
      next: (result: User) => {
        this.user = result;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  title = 'SelenicSparkApp';
}

interface User {
  username: string;
  roles: string[];
}
