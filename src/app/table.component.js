"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TableComponent = (function () {
    function TableComponent() {
        this.message = '';
    }
    // ngOnInit(): void {
    //
    // }
    TableComponent.prototype.clicked = function () {
        console.log('clicked');
        this.dtOptions = {
            ajax: 'data/data.json',
            "columns": [
                { "title": "Имя", "data": "name" },
                { "title": "Должность", "data": "position" },
                { "title": "Оффис", "data": "office" },
                { "title": "Внутр", "data": "extn" },
                { "title": "Принят", "data": "start_date" },
                { "title": "Ставка", "data": "salary" },
                {
                    title: 'Изменить', defaultContent: "\n        <button md-button class=\"mat-button edit-user\">\n          <md-icon class=\"material-icons mat-icon\">Button</md-icon>\n        </button>"
                }
            ]
        };
    };
    TableComponent.prototype.clicked2 = function () {
        var _this = this;
        console.log('clicked2');
        this.dtOptions = {
            ajax: 'data/data2.json',
            "rowId": "name",
            "columns": [
                { "title": "Имя", "data": "name" },
                { "title": "Должность", "data": "position" },
                { "title": "Оффис", "data": "office" },
                { "title": "Внутр", "data": "extn" },
                { "title": "Принят", "data": "start_date" },
                { "title": "Ставка", "data": "salary" }
            ],
            rowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                var self = _this;
                // Unbind first in order to avoid any duplicate handler
                // (see https://github.com/l-lin/angular-datatables/issues/87)
                $('td', nRow).unbind('click');
                $('td', nRow).bind('click', function () {
                    self.someClickHandler(aData);
                });
                return nRow;
            }
        };
    };
    TableComponent.prototype.someClickHandler = function (aData) {
        this.message = aData.name + ' - ' + aData.position;
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: 'app/table.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map