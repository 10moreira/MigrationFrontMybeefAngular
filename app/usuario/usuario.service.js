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
var USUARIO = [
    { id: 1, cidades_id: 3, pais_id: 4, login: '12345', email: 'mama@gmail.com', senha: '12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067' },
    { id: 2, cidades_id: 3, pais_id: 4, login: '12345', email: 'mama@gmail.com', senha: '12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067' },
    { id: 3, cidades_id: 3, pais_id: 4, login: '12345', email: 'mama@gmail.com', senha: '12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067' },
    { id: 4, cidades_id: 3, pais_id: 4, login: '12345', email: 'mama@gmail.com', senha: '12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067' },
    { id: 5, cidades_id: 3, pais_id: 4, login: '12345', email: 'mama@gmail.com', senha: '12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067' },
    { id: 6, cidades_id: 3, pais_id: 4, login: '12345', email: 'mama@gmail.com', senha: '12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067' },
];
var UsuarioService = /** @class */ (function () {
    function UsuarioService(messageService) {
        this.messageService = messageService;
    }
    UsuarioService.prototype.getUsuarios = function () {
        return USUARIO;
    };
    UsuarioService.prototype.getUsuario = function (id) {
        var array = this.getUsuarios().filter(function (item) { return item.id == id; });
        return array.length ? array[0] : null;
    };
    UsuarioService.prototype.createUsuario = function (usuario) {
        usuario.id = this.getUsuarios().length + 1;
        this.getUsuarios().push(usuario);
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Usuario cadastrado com sucesso'
        });
    };
    UsuarioService.prototype.deleteUsuario = function (id) {
        var index = this.getUsuarios().findIndex(function (item) { return item.id == id; });
        if (index != -1) {
            this.getUsuarios().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Usuario excluído com sucesso'
        });
    };
    UsuarioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map