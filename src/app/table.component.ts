import {Component} from "@angular/core";
@Component({
    selector: 'app-table',
    templateUrl: 'app/table.component.html'
})

export class TableComponent {
    dtOptions: any = {};

    ngOnInit(): void {
        this.dtOptions = {
            ajax: 'data/data.json',
            "columns": [
                {"title": "Имя", "data": "name"},
                {"title": "Должность", "data": "position"},
                {"title": "Оффис", "data": "office"},
                {"title": "Внутр", "data": "extn"},
                {"title": "Принят", "data": "start_date"},
                {"title": "Ставка", "data": "salary"}
            ]
        };
    }

    clicked() {
        console.log('clicked');
    }

}