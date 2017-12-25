import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{tittle}}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
  `
})
export class CoursesComponent {
  private tittle = 'List of courses';
  courses;
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
