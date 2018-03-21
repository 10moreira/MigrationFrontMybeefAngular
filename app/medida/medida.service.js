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
var MEDIDAS = [
    { id: 1, valor: 239, ano: 2018, propriedade_id: 4 },
    { id: 2, valor: 260, ano: 2017, propriedade_id: 2 },
    { id: 3, valor: 220, ano: 2015, propriedade_id: 6 },
    { id: 4, valor: 200, ano: 2015, propriedade_id: 4 }
];
var MedidaService = /** @class */ (function () {
    function MedidaService(messageService) {
        this.messageService = messageService;
    }
    MedidaService.prototype.getMedidas = function () {
        return MEDIDAS;
    };
    MedidaService.prototype.getMedida = function (id) {
        var array = this.getMedidas().filter(function (item) { return item.id == id; });
        return array.length ? array[0] : null;
    };
    MedidaService.prototype.createMedida = function (medida) {
        medida.id = this.getMedidas().length + 1;
        this.getMedidas().push(medida);
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Medida incluida com sucesso'
        });
    };
    MedidaService.prototype.deleteMedida = function (id) {
        var index = this.getMedidas().findIndex(function (item) { return item.id == id; });
        if (index != -1) {
            this.getMedidas().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Medida excluida com sucesso'
        });
    };
    MedidaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], MedidaService);
    return MedidaService;
}());
exports.MedidaService = MedidaService;
//# sourceMappingURL=medida.service.js.map