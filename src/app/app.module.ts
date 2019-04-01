import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './_layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './core/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminHeaderComponent } from './_layout/admin-header/admin-header.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CreateTaskComponent } from './components/task/create-task/create-task.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './components/error/error.component';
import { ProjectPortalComponent } from './components/project-portal/project-portal.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StickerComponent } from './components/sticker/sticker.component';
import { DraggableDirective } from './_directives/draggable.directive';
import { SessionService } from './services/session.service';
import { StickerService } from './services/sticker.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    DashboardComponent,
    AdminHeaderComponent,
    HomeComponent,
    CreateTaskComponent,
    TaskListComponent,
    ProjectListComponent,
    ErrorComponent,
    ProjectPortalComponent,
    ProfileComponent,
    StickerComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AuthService,SessionService,StickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
