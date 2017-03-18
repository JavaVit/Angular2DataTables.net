import {Component} from "@angular/core";
@Component({
    selector: 'app-about',
    templateUrl: 'app/about.component.html'

})

export class AboutComponent{

    fruits = ['Apple', 'Orange', 'Mango', 'Grapes'];
    private myfruit: string;


    clicked() {
        console.log('clicked');
        this.myfruit = this.fruits[1];
    }
}