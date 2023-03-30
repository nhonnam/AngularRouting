import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() postList!: any[];

  currentPost!: Post;
  // constructor(private postsService: PostsService) {
  //   this.config = postsService.config;
  //   console.log("config",this.config);
  // }
  constructor(private readonly configService: ConfigService) {}

  ngOnInit() {
    this.showPost();
  }

  showPost() {
    this.configService.getConfig().subscribe((data: any) => {
      this.postList = data;
    });
  }

  editPost(post: Post) {
    this.currentPost = post;
  }

  deletePost(id: number) {
    this.configService.deletePost(id).subscribe({
      next: (res) => {
        this.postList = this.postList.filter((item) => item.id != id);
      },
    });
  }

  updatePost($event: Post): void {
    console.log($event);
    this.configService.updatePost($event, $event.id).subscribe({
      next: (res) => {
        this.postList = this.postList.map((item) => {
          if (item.id == $event.id) return { ...item, title: $event.title };
          else return item;
          //console.log(item);
        });
      },
    });

    console.log(this.postList);
  }
}
