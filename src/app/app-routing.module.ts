import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { AuthGuard } from './_guards/auth-guard.guard';
import { ErrorComponent } from './components/error/error.component';
import { ProjectPortalComponent } from './components/project-portal/project-portal.component';
import { CreateTaskComponent } from './components/task/create-task/create-task.component';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  // {
  //   path: 'app',
  //   component: AppLayoutComponent,
  //   children: [

  //   ]
  // },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'projectportal', component: ProjectPortalComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TaskListComponent, canActivate: [AuthGuard] },

  { path: 'createtask', component: CreateTaskComponent},

  { path: 'projects', component: ProjectListComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
