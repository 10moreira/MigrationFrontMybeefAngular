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
var message_service_1 = require("../message.service");
var CATEGORIAS = [
    { id: 1, nomeCategoria: 'Vacas de cria' },
    { id: 2, nomeCategoria: 'Vacas de descarte' },
    { id: 3, nomeCategoria: 'Terneiros' },
    { id: 4, nomeCategoria: 'Terneiras' },
    { id: 5, nomeCategoria: 'Novilhos 13-24' },
    { id: 6, nomeCategoria: 'Novilhos 25-36' },
    { id: 7, nomeCategoria: 'Novilhos > 36 ' }
];
var CategoriaAnimalService = /** @class */ (function () {
    function CategoriaAnimalService(messageService) {
        this.messageService = messageService;
    }
    CategoriaAnimalService.prototype.getCategorias = function () {
        return CATEGORIAS;
    };
    CategoriaAnimalService.prototype.getCategoria = function (id) {
        var array = this.getCategorias().filter(function (item) { return item.id == id; });
        return array.length ? array[0] : null;
    };
    CategoriaAnimalService.prototype.createCategoria = function (categoriaAnimal) {
        categoriaAnimal.id = this.getCategorias().length + 1;
        this.getCategorias().push(categoriaAnimal);
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Categoria incluida'
        });
    };
    CategoriaAnimalService.prototype.deleteCategoria = function (id) {
        var index = this.getCategorias().findIndex(function (item) { return item.id == id; });
        if (index != -1) {
            this.getCategorias().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Tarefa excluida'
        });
    };
    CategoriaAnimalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], CategoriaAnimalService);
    return CategoriaAnimalService;
}());
exports.CategoriaAnimalService = CategoriaAnimalService;
//# sourceMappingURL=categoriaanimal.service.js.map