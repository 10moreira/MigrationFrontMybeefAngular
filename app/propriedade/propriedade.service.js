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
var PROPRIEDADE = [
    { id: 1, usuario_id: 3, cidades_id: 5, pais_id: 4, data: '22/06/2016', nome: 'Joao da Silva ', nro_car: '4we', tamanho: 68, localidade: 'Bagé' },
    { id: 2, usuario_id: 3, cidades_id: 5, pais_id: 4, data: '22/06/2016', nome: 'Joao da Silva ', nro_car: '4df', tamanho: 68, localidade: 'Bagé' },
    { id: 3, usuario_id: 3, cidades_id: 5, pais_id: 4, data: '22/06/2016', nome: 'Joao da Silva ', nro_car: '4et5', tamanho: 68, localidade: 'Bagé' },
    { id: 4, usuario_id: 3, cidades_id: 5, pais_id: 4, data: '22/06/2016', nome: 'Joao da Silva ', nro_car: '4asc', tamanho: 68, localidade: 'Bagé' },
    { id: 5, usuario_id: 3, cidades_id: 5, pais_id: 4, data: '22/06/2016', nome: 'Joao da Silva ', nro_car: '4xsa', tamanho: 68, localidade: 'Bagé' }
];
var PropriedadeService = /** @class */ (function () {
    function PropriedadeService(messageService) {
        this.messageService = messageService;
    }
    PropriedadeService.prototype.getPropriedades = function () {
        return PROPRIEDADE;
    };
    PropriedadeService.prototype.getPropriedade = function (id) {
        var array = this.getPropriedades().filter(function (item) { return item.id == id; });
        return array.length ? array[0] : null;
    };
    PropriedadeService.prototype.createPropriedade = function (propriedade) {
        propriedade.id = this.getPropriedades().length + 1;
        this.getPropriedades().push(propriedade);
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Propriedade incluída com sucesso'
        });
    };
    PropriedadeService.prototype.deletePropriedade = function (id) {
        var index = this.getPropriedades().findIndex(function (item) { return item.id == id; });
        if (index != -1) {
            this.getPropriedades().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Propriedade excluida com sucesso'
        });
    };
    PropriedadeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], PropriedadeService);
    return PropriedadeService;
}());
exports.PropriedadeService = PropriedadeService;
//# sourceMappingURL=propriedade.service.js.map