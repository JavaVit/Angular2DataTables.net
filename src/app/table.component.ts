import {Component} from "@angular/core";
@Component({
    selector: 'app-table',
    templateUrl: 'app/table.component.html'
//     template: `<h1>My Table page</h1>
// <p class="text-danger">You clicked on: <strong>{{ message }}</strong></p>
// <br />
//                 <button (click)="clicked()">Load table</button>
//                 <button (click)="clicked2()">Load table</button>
//                 <table *ngIf="dtOptions != undefined" datatable [dtOptions]="dtOptions" class="row-border hover"></table>
// `
})

export class TableComponent {
    dtOptions: any;
    message: string = '';

    // ngOnInit(): void {
    //
    // }


    clicked() {
        console.log('clicked');
        this.dtOptions = {
            ajax: 'data/data.json',
            "columns": [
                {"title": "Имя", "data": "name"},
                {"title": "Должность", "data": "position"},
                {"title": "Оффис", "data": "office"},
                {"title": "Внутр", "data": "extn"},
                {"title": "Принят", "data": "start_date"},
                {"title": "Ставка", "data": "salary"},
                {
                    title: 'Изменить', defaultContent: `
        <button md-button class="mat-button edit-user">
          <md-icon class="material-icons mat-icon">Button</md-icon>
        </button>`
                }
            ]
        };
    }

    clicked2() {
        console.log('clicked2');
        this.dtOptions = {
            ajax: 'data/data2.json',
            "rowId": "name",
            "columns": [
                {"title": "Имя", "data": "name"},
                {"title": "Должность", "data": "position"},
                {"title": "Оффис", "data": "office"},
                {"title": "Внутр", "data": "extn"},
                {"title": "Принят", "data": "start_date"},
                {"title": "Ставка", "data": "salary"}
            ],
            rowCallback: (nRow: number, aData: any, iDisplayIndex: number, iDisplayIndexFull: number) => {
                let self = this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $('td', nRow).unbind('click');
                $('td', nRow).bind('click', () => {
                    self.someClickHandler(aData);
                });
                return nRow;
            }
        };
    }

    someClickHandler(aData: any): void {
        this.message = aData.name + ' - ' + aData.position;
    }

}