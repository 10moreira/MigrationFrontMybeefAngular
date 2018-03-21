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
var medida_service_1 = require("./medida.service");
var router_1 = require("@angular/router");
var message_service_1 = require("../message.service");
var MedidaEditComponent = /** @class */ (function () {
    function MedidaEditComponent(medidaService, route, router, messageService) {
        this.medidaService = medidaService;
        this.route = route;
        this.router = router;
        this.messageService = messageService;
    }
    MedidaEditComponent.prototype.submit = function () {
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Medida alterada com sucesso'
        });
        this.router.navigate(['medidas', 'list']);
    };
    MedidaEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.medida = _this.medidaService.getMedida(id);
            if (!_this.medida) {
                alert('Medida não existe');
            }
        });
    };
    MedidaEditComponent = __decorate([
        core_1.Component({
            selector: 'medida-edit',
            templateUrl: 'medida-edit.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [medida_service_1.MedidaService,
            router_1.ActivatedRoute,
            router_1.Router,
            message_service_1.MessageService])
    ], MedidaEditComponent);
    return MedidaEditComponent;
}());
exports.MedidaEditComponent = MedidaEditComponent;
//# sourceMappingURL=medida-edit.component.js.map