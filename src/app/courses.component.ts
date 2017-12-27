import {Component} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-courses',
  template: `{{text|summary:10}}
  `
})
export class CoursesComponent {
  text = `xin chao moi nguoi di choi voi toi`;
}
