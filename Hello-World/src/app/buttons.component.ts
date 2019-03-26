import { Component } from "@angular/core";
@Component({
    selector:"btns",
    template:`
        <div (click)="onDivClick()">
            <button (click)="onShow($event)" class="btn" [style.backgroundColor]="isActive ? 'green' : 'red'">Show</button>
        </div>
    `
    /*<button class="btn btn-primary" [class.active]="isActive" >Primary</button>*/
})
export class buttonsComponent{
    isActive = true;
    onDivClick(){
        console.log("Div is clicked");
    }
    onShow($event){
        $event.stopPropagation();
        console.log("Showing hello",$event);
    }
}