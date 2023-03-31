import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  currentPostList!: any[];

  showPost() {
    this.configService.getConfig().subscribe((data: any) => {
      this.currentPostList = data;
      console.log(this.currentPostList);     
    });
  }

  constructor(fb: FormBuilder, private configService: ConfigService, private router: Router) {
    this.postForm = fb.group({
      title: [''],
      content: [''],
      postedBy: [''],
      postedAt: [new Date().toDateString()],
    });
  }

  ngOnInit(): void {
    this.showPost();
  }

  onSubmit(postForm: any) {
    console.log(postForm);
    this.configService.addPost(postForm.value).subscribe({
      next: (res) => {this.currentPostList = [...(this.currentPostList as any[]), res]
      }
    });
    this.postForm.reset();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
