import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MyHTTPComponent} from "./myhttp/myhttp.component";
import {HttpModule} from '@angular/http';
import {ChildComponent} from "./child.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {TableComponent} from "./table.component";
import {DataTablesModule} from "angular-datatables";
import {AboutComponent} from "./about.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes),
        DataTablesModule
    ],
    declarations: [
        AppComponent,
        ChildComponent,
        MyHTTPComponent,
        TableComponent,
        AboutComponent],
    bootstrap: [
        AppComponent,
        MyHTTPComponent]
})
export class AppModule {
}
