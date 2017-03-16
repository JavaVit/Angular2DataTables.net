import { Routes } from '@angular/router';
import {AboutComponent} from "./about.component";
import {TableComponent} from "./table.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'table', component:  TableComponent},
    { path: 'about', component: AboutComponent }

];