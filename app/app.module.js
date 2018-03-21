"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var task_edit_component_1 = require("./task/task-edit.component");
var task_list_component_1 = require("./task/task-list.component");
var app_routing_1 = require("./app.routing");
var task_service_1 = require("./task/task.service");
var task_new_component_1 = require("./task/task-new.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var message_service_1 = require("./message.service");
var categoriaanimal_edit_component_1 = require("./categoriaanimal/categoriaanimal-edit.component");
var categoriaanimal_list_component_1 = require("./categoriaanimal/categoriaanimal-list.component");
var categoriaanimal_new_component_1 = require("./categoriaanimal/categoriaanimal-new.component");
var categoriaanimal_service_1 = require("./categoriaanimal/categoriaanimal.service");
var medida_edit_component_1 = require("./medida/medida-edit.component");
var medida_list_component_1 = require("./medida/medida-list.component");
var medida_new_component_1 = require("./medida/medida-new.component");
var medida_service_1 = require("./medida/medida.service");
var propriedade_edit_component_1 = require("./propriedade/propriedade-edit.component");
var propriedade_list_component_1 = require("./propriedade/propriedade-list.component");
var propriedade_new_component_1 = require("./propriedade/propriedade-new.component");
var propriedade_service_1 = require("./propriedade/propriedade.service");
var rebanho_edit_component_1 = require("./rebanho/rebanho-edit.component");
var rebanho_list_component_1 = require("./rebanho/rebanho-list.component");
var rebanho_new_component_1 = require("./rebanho/rebanho-new.component");
var rebanho_service_1 = require("./rebanho/rebanho.service");
var usuario_edit_component_1 = require("./usuario/usuario-edit.component");
var usuario_list_component_1 = require("./usuario/usuario-list.component");
var usuario_new_component_1 = require("./usuario/usuario-new.component");
var usuario_service_1 = require("./usuario/usuario.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, ng2_bootstrap_1.AlertModule],
            declarations: [
                app_component_1.AppComponent, task_edit_component_1.TaskEditComponent, task_list_component_1.TaskListComponent, task_new_component_1.TaskNewComponent,
                categoriaanimal_edit_component_1.CategoriaEditComponent, categoriaanimal_list_component_1.CategoriaAnimalListComponent, categoriaanimal_new_component_1.CategoriaAnimalNewComponent,
                medida_edit_component_1.MedidaEditComponent, medida_list_component_1.MedidaListComponent, medida_new_component_1.MedidaNewComponent,
                propriedade_edit_component_1.PropriedadeEditComponent, propriedade_list_component_1.PropriedadeListComponent, propriedade_new_component_1.PropriedadeNewComponent,
                rebanho_edit_component_1.RebanhoEditComponent, rebanho_list_component_1.RebanhoListComponent, rebanho_new_component_1.RebanhoNewComponent,
                usuario_edit_component_1.UsuarioEditComponent, usuario_list_component_1.UsuarioListComponent, usuario_new_component_1.UsuarioNewComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [task_service_1.TaskService, message_service_1.MessageService, categoriaanimal_service_1.CategoriaAnimalService, medida_service_1.MedidaService, propriedade_service_1.PropriedadeService, rebanho_service_1.RebanhoService, usuario_service_1.UsuarioService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map