import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public posts?: Post[];

  constructor(http: HttpClient) {
    http.get<Post[]>('/posts').subscribe(result => {
      this.posts = result;
    }/*, error => console.error(error)*/);
  }

  title = 'SelenicSparkApp_v2_Angular';
}

interface Post {
  postID: number;
  title: string;
  text: string | undefined;
  author: string;
  created: Date;
}
