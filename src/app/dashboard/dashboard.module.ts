import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsService } from './services/posts.service';
import { UpdateFormComponent } from './components/post/update-form/update-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostComponent, PostFormComponent, UpdateFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [PostsService],
  exports: [PostFormComponent],
})
export class DashboardModule {}
