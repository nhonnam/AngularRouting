import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    {
      id: 1,
      title: "Title 1",
      content: "Hello nhon nam dey"
    },
    {
      id: 2,
      title: "Title 2",
      content: "Hello nhon nam dey"
    },
    {
      id: 3,
      title: "Title 3",
      content: "Hello nhon nam dey"
    },
    {
      id: 4,
      title: "Title 4",
      content: "Hello nhon nam dey"
    },
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value => {

      const page = value.get('page');
      const order = value.get('orderBy');
      console.log(page, order);
    })
  }
}
