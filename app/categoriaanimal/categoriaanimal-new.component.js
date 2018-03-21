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
var categoriaanimal_service_1 = require("./categoriaanimal.service");
var router_1 = require("@angular/router");
var CategoriaAnimalNewComponent = /** @class */ (function () {
    function CategoriaAnimalNewComponent(categoriaAnimalService, router) {
        this.categoriaAnimalService = categoriaAnimalService;
        this.router = router;
        this.categoriaAnimal = {
            id: 0,
            nomeCategoria: ''
        };
    }
    CategoriaAnimalNewComponent.prototype.submit = function () {
        this.categoriaAnimalService.createCategoria(this.categoriaAnimal);
        this.router.navigate(['categoriaanimal', 'new']);
    };
    CategoriaAnimalNewComponent = __decorate([
        core_1.Component({
            selector: 'categoriaanimal-new',
            templateUrl: 'categoriaanimal-new.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [categoriaanimal_service_1.CategoriaAnimalService,
            router_1.Router])
    ], CategoriaAnimalNewComponent);
    return CategoriaAnimalNewComponent;
}());
exports.CategoriaAnimalNewComponent = CategoriaAnimalNewComponent;
//# sourceMappingURL=categoriaanimal-new.component.js.map