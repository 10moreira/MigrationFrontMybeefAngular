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
var message_service_1 = require("../message.service");
var categoriaanimal_service_1 = require("./categoriaanimal.service");
var CategoriaEditComponent = /** @class */ (function () {
    function CategoriaEditComponent(categoriaanimalService, route, router, messageService) {
        this.categoriaanimalService = categoriaanimalService;
        this.route = route;
        this.router = router;
        this.messageService = messageService;
    }
    CategoriaEditComponent.prototype.submit = function () {
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Categoria alterada com sucesso'
        });
        this.router.navigate(['categorias', 'list']);
    };
    CategoriaEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.categoriaanimal = _this.categoriaanimalService.getCategoria(id);
            if (!_this.categoriaanimal) {
                alert('Categoria não existe');
            }
        });
    };
    CategoriaEditComponent = __decorate([
        core_1.Component({
            selector: 'categoria-edit',
            templateUrl: 'categoriaanimal-edit.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [categoriaanimal_service_1.CategoriaAnimalService,
            router_1.ActivatedRoute,
            router_1.Router,
            message_service_1.MessageService])
    ], CategoriaEditComponent);
    return CategoriaEditComponent;
}());
exports.CategoriaEditComponent = CategoriaEditComponent;
//# sourceMappingURL=categoriaanimal-edit.component.js.map