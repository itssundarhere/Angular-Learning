import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { imgCourseComponent } from './imgCourses.component';
import { buttonsComponent } from './buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    imgCourseComponent,
    buttonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
