import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { ConfigService } from '../services/config.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  config!: any[];
  // constructor(private postsService: PostsService) {
  //   this.config = postsService.config;
  //   console.log("config",this.config);
  // }
  constructor(private configService: ConfigService) {}

  showPost() {
    this.configService.getConfig().subscribe((data: any) => {
      this.config = data;
    });
  }

  // showConfigResponse() {
  //   this.configService.getConfigResponse()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);

  //       // access the body directly, which is typed as `Config`.
  //       this.config = { ...resp.body! };
  //       console.log(resp);

  //     });
  // }

  deletePost(id: number) {
    this.configService.deletePost(id).subscribe({
      next: (res) => {
        this.config = this.config.filter((item) => item.id != id);
      },
    });
  }

  ngOnInit() {
    this.showPost();
    //this.showConfigResponse();
  }
}
