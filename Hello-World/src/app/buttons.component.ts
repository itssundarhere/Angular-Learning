import { Component } from "@angular/core";
@Component({
    selector:"btns",
    template:`
        <div (click)="onDivClick()">
            <button (click)="onShow($event)" class="btn" [style.backgroundColor]="isActive ? 'green' : 'red'">Show</button>
        </div>
        <input #email (keyup.enter)="onKeyUp(email.value)"/>
    `
    /*<button class="btn btn-primary" [class.active]="isActive" >Primary</button>*/
    /*Event Filtering is included for enter key --<input (keyup.enter)="onKeyUp($event)"/>*/ 
    /*Template variables by passing event and assigning it to variables --<input #email (keyup.enter)="onKeyUp(email.value)"/>*/
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
    //onKeyUp($event){
        onKeyUp(email){
        //if($event.keyCode === 13 ){
            console.log("ENTER key is pressed\n",email);
        //}
    }
}