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
var router_1 = require("@angular/router");
var categoriaanimal_service_1 = require("./categoriaanimal.service");
var CategoriaAnimalListComponent = /** @class */ (function () {
    function CategoriaAnimalListComponent(categoriaAnimal, router) {
        this.categoriaAnimal = categoriaAnimal;
        this.router = router;
    }
    CategoriaAnimalListComponent.prototype.goToEdit = function (id) {
        this.router.navigate(['categoriaanimal', id, 'edit']);
    };
    CategoriaAnimalListComponent.prototype.deleteCategoria = function (id) {
        this.categoriaAnimal.getCategoria(id);
    };
    CategoriaAnimalListComponent.prototype.ngOnInit = function () {
        this.categoriaanimal = this.categoriaAnimal.getCategorias();
    };
    CategoriaAnimalListComponent = __decorate([
        core_1.Component({
            selector: 'categoria-list',
            templateUrl: 'categoriaanimal-list.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [categoriaanimal_service_1.CategoriaAnimalService, router_1.Router])
    ], CategoriaAnimalListComponent);
    return CategoriaAnimalListComponent;
}());
exports.CategoriaAnimalListComponent = CategoriaAnimalListComponent;
//# sourceMappingURL=categoriaanimal-list.component.js.map