import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PostFormComponent } from './dashboard/components/post-form/post-form.component';
import { DashboardGuard } from './shared/guards/dashboard.guard';
import { FournotfourComponent } from './fournotfour/fournotfour.component';

const routes: Routes = [
  { path: 'dashboard', component: PostFormComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent, canActivate: [DashboardGuard] },
  { path: '404', component: FournotfourComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, DashboardGuard],
})
export class AppRoutingModule {}
