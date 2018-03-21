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
var RebanhoNewComponent = /** @class */ (function () {
    function RebanhoNewComponent(rebanhoService, router) {
        this.rebanhoService = rebanhoService;
        this.router = router;
        this.rebanho = {
            id: 0,
            ano: 1,
            propriedade_id: 2,
            categoria_animal_id: 3,
            qtd_estocada: 4,
            peso_estocado: 5,
            qtd_vendida: 6,
            peso_vendido: 7
        };
    }
    RebanhoNewComponent.prototype.submit = function () {
        this.rebanhoService.createRebanho(this.rebanho);
        this.router.navigate(['rebanhos', 'list']);
    };
    RebanhoNewComponent = __decorate([
        core_1.Component({
            selector: 'rebanho-new',
            templateUrl: 'rebanho-new.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [rebanho_service_1.RebanhoService,
            router_1.Router])
    ], RebanhoNewComponent);
    return RebanhoNewComponent;
}());
exports.RebanhoNewComponent = RebanhoNewComponent;
//# sourceMappingURL=rebanho-new.component.js.map