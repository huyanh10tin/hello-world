import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { CourseComponent } from './course/course.component';
import {CoursesComponent} from './courses.component';
import {CoursesService} from './courses.service';
import {SummaryPipe} from './summary.pipe';
import {FormatHuyAnh} from './formathuyanh.pipe';
import {StarComponent} from './star/star.component';
import { InputComponent } from './input/input.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    AppComponent, CourseComponent, CoursesComponent, SummaryPipe, StarComponent, InputComponent, FormatHuyAnh, PanelComponent, LikeComponent, ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    CoursesService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
