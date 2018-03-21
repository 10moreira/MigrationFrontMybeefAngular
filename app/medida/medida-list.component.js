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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var medida_service_1 = require("./medida.service");
var router_1 = require("@angular/router");
var MedidaListComponent = /** @class */ (function () {
    function MedidaListComponent(medidaService, router) {
        this.medidaService = medidaService;
        this.router = router;
    }
    MedidaListComponent.prototype.goToEdit = function (id) {
        this.router.navigate(['medida', id, 'edit']);
    };
    MedidaListComponent.prototype.deleteMedida = function (id) {
        this.medidaService.deleteMedida(id);
    };
    MedidaListComponent.prototype.ngOnInit = function () {
        this.medidas = this.medidaService.getMedidas();
    };
    MedidaListComponent = __decorate([
        core_1.Component({
            selector: 'medida-list',
            templateUrl: 'medida-list.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [medida_service_1.MedidaService, router_1.Router])
    ], MedidaListComponent);
    return MedidaListComponent;
}());
exports.MedidaListComponent = MedidaListComponent;
//# sourceMappingURL=medida-list.component.js.map