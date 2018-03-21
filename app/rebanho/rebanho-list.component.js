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
var rebanho_service_1 = require("./rebanho.service");
var router_1 = require("@angular/router");
var RebanhoListComponent = /** @class */ (function () {
    function RebanhoListComponent(rebanhoService, router) {
        this.rebanhoService = rebanhoService;
        this.router = router;
    }
    RebanhoListComponent.prototype.goToEdit = function (id) {
        this.router.navigate(['rebanhos', id, 'edit']);
    };
    RebanhoListComponent.prototype.deleteRebanho = function (id) {
        this.rebanhoService.deleteRebanho(id);
    };
    RebanhoListComponent.prototype.ngOnInit = function () {
        this.rebanhos = this.rebanhoService.getRebanhos();
    };
    RebanhoListComponent = __decorate([
        core_1.Component({
            selector: 'rebanho-list',
            templateUrl: 'rebanho-list.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [rebanho_service_1.RebanhoService, router_1.Router])
    ], RebanhoListComponent);
    return RebanhoListComponent;
}());
exports.RebanhoListComponent = RebanhoListComponent;
//# sourceMappingURL=rebanho-list.component.js.map