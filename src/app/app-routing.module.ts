import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { PostFormComponent } from './dashboard/components/post-form/post-form.component';
import { DashboardGuard } from './dashboard/guard/dashboard.guard';
import { FournotfourComponent } from './fournotfour/fournotfour.component';

const routes: Routes = [
  { path: 'dashboard', component: PostFormComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent, canActivate: [DashboardGuard] },
  { path: '**', component: FournotfourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, DashboardGuard],
})
export class AppRoutingModule {}
