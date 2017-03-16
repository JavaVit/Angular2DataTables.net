import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/table']">Table</a>
    <a [routerLink]="['/about']">About</a>
    
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
<h1>Hello {{name}}</h1>
<child-comp></child-comp>
`
})
export class AppComponent {
    name = 'Angular';
}