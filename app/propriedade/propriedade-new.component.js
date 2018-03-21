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
var propriedade_service_1 = require("./propriedade.service");
var router_1 = require("@angular/router");
var PropriedadeNewComponent = /** @class */ (function () {
    function PropriedadeNewComponent(propriedadeService, router) {
        this.propriedadeService = propriedadeService;
        this.router = router;
        this.propriedade = {
            id: 0,
            usuario_id: 1,
            cidades_id: 2,
            pais_id: 3,
            data: '',
            nome: '',
            nro_car: '',
            tamanho: 7,
            localidade: ''
        };
    }
    PropriedadeNewComponent.prototype.submit = function () {
        this.propriedadeService.createPropriedade(this.propriedade);
        this.router.navigate(['propriedades', 'new']);
    };
    PropriedadeNewComponent = __decorate([
        core_1.Component({
            selector: 'propriedade-new',
            templateUrl: 'propriedade-new.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [propriedade_service_1.PropriedadeService,
            router_1.Router])
    ], PropriedadeNewComponent);
    return PropriedadeNewComponent;
}());
exports.PropriedadeNewComponent = PropriedadeNewComponent;
//# sourceMappingURL=propriedade-new.component.js.map