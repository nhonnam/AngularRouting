import { Injectable, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Post } from '../model/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  config: Array<any> | undefined;
  constructor(private configService: ConfigService) {
    this.configService.getConfig().subscribe((data: any) => {
      this.config = data;
      console.log("service",this.config);
    });
  }

  // getConfig(): Observable<any> | undefined {
  //   return this.config;
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
}
