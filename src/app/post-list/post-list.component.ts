import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts = [
    {
      id: 1,
      title: "Title 1",
      content: "Hello nhon nam dey"
    },
    {
      id: 2,
      title: "Title 1",
      content: "Hello nhon nam dey"
    },
    {
      id: 3,
      title: "Title 1",
      content: "Hello nhon nam dey"
    },
  ]

  ngOnInit(): void {
    
  }
}
