import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { CourseComponent } from './course/course.component';
import {CoursesComponent} from './courses';
import {CoursesService} from './courses.service';





@NgModule({
  declarations: [
    AppComponent, CourseComponent, CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
