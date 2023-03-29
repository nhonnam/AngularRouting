import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  postForm: any;

  constructor(fb: FormBuilder, private configService: ConfigService) {
    this.postForm = fb.group({
      title: [''],
      content: [''],
      postedBy: [''],
      postedAt: [new Date().toDateString()],
    });
  }

  ngOnInit(): void {}

  onSubmit(postForm: any) {
    console.log(postForm);
    this.configService.addPost(postForm.value).subscribe();
  }
}
