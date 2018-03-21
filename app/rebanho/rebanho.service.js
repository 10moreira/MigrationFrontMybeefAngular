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
var REBANHO = [
    { id: 1, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000 },
    { id: 2, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000 },
    { id: 3, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000 },
    { id: 4, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000 },
    { id: 5, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000 },
    { id: 6, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000 },
    { id: 7, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000 },
];
var RebanhoService = /** @class */ (function () {
    function RebanhoService(messageService) {
        this.messageService = messageService;
    }
    RebanhoService.prototype.getRebanhos = function () {
        return REBANHO;
    };
    RebanhoService.prototype.getRebanho = function (id) {
        var array = this.getRebanhos().filter(function (item) { return item.id == id; });
        return array.length ? array[0] : null;
    };
    RebanhoService.prototype.createRebanho = function (rebanho) {
        rebanho.id = this.getRebanhos().length + 1;
        this.getRebanhos().push(rebanho);
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Rebanho incluida com sucesso'
        });
    };
    RebanhoService.prototype.deleteRebanho = function (id) {
        var index = this.getRebanhos().findIndex(function (item) { return item.id == id; });
        if (index != -1) {
            this.getRebanhos().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Rebanho excluido com sucesso'
        });
    };
    RebanhoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], RebanhoService);
    return RebanhoService;
}());
exports.RebanhoService = RebanhoService;
//# sourceMappingURL=rebanho.service.js.map