import { Component,OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let a of courses">
        {{ a }}
      </li>
    </ul>
    `
})
export class CoursesComponent{
  title = "List of Courses";
  courses ;
  constructor(service: CoursesService){
   this.courses = service.getCourses();
  }
  /* getTitle(){
  //   return this.title;
  }*/
}