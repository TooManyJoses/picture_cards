import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts =[
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'hiking4nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snow Mountain',
      imageUrl: 'assets/mountain.jpg',
      username: 'snowshoerunner',
      content: 'Lovely day snowshoeing in Estes Park'
    },
    {
      title: 'Sandy Beach',
      imageUrl: 'assets/beach.jpg',
      username: 'fun-in-the-sun',
      content: 'Counting down the days until I am back!'
    },
  ]
}
