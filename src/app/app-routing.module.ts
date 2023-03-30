import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { PostFormComponent } from './dashboard/components/post-form/post-form.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';

const routes: Routes = [
  { path: 'post', component: PostFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: FournotfourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
