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
var rebanho_service_1 = require("./rebanho.service");
var router_1 = require("@angular/router");
var message_service_1 = require("../message.service");
var RebanhoEditComponent = /** @class */ (function () {
    function RebanhoEditComponent(rebanhoService, route, router, messageService) {
        this.rebanhoService = rebanhoService;
        this.route = route;
        this.router = router;
        this.messageService = messageService;
    }
    RebanhoEditComponent.prototype.submit = function () {
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Rebanho alterada com sucesso'
        });
        this.router.navigate(['rebanho', 'list']);
    };
    RebanhoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.rebanho = _this.rebanhoService.getRebanho(id);
            if (!_this.rebanho) {
                alert('Rebanho não existe');
            }
        });
    };
    RebanhoEditComponent = __decorate([
        core_1.Component({
            selector: 'rebanho-edit',
            templateUrl: 'rebanho-edit.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [rebanho_service_1.RebanhoService,
            router_1.ActivatedRoute,
            router_1.Router,
            message_service_1.MessageService])
    ], RebanhoEditComponent);
    return RebanhoEditComponent;
}());
exports.RebanhoEditComponent = RebanhoEditComponent;
//# sourceMappingURL=rebanho-edit.component.js.map