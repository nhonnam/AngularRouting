import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { ConfigService } from '../services/config.service';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent implements OnInit {
  config: Array<any> | undefined;
  constructor(private postsService: PostsService) {
    this.config = postsService.config;
    console.log("config",this.config);
  }
  // constructor(private configService: ConfigService) {}
  // showConfig() {
  //   this.configService.getConfig().subscribe((data: Post) => {
  //     console.log(data);
  //     this.config = data;
  //   });
  // }

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

  ngOnInit() {
    //this.showConfig();
    //this.showConfigResponse();
  }
}
