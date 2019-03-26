import { Component } from '@angular/core';
@Component({
    selector:'imgCourse',

    /* Property Binding
    <h2 [textComponent] = "title"></h2>
    <img [src]="title"/>
    */

    template:`
        <h2>{{title}}</h2>
        <img bind-src="imgURL" width="50%" height="50%"/>
        `
})

export class imgCourseComponent{
    title = 'List of Course.';
    imgUrl = "https://i.stack.imgur.com/c9dMF.png";
}