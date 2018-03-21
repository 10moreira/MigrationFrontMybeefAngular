"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var task_list_component_1 = require("./task/task-list.component");
var task_edit_component_1 = require("./task/task-edit.component");
var task_new_component_1 = require("./task/task-new.component");
var categoriaanimal_list_component_1 = require("./categoriaanimal/categoriaanimal-list.component");
var categoriaanimal_new_component_1 = require("./categoriaanimal/categoriaanimal-new.component");
var categoriaanimal_edit_component_1 = require("./categoriaanimal/categoriaanimal-edit.component");
var medida_list_component_1 = require("./medida/medida-list.component");
var medida_new_component_1 = require("./medida/medida-new.component");
var medida_edit_component_1 = require("./medida/medida-edit.component");
var propriedade_list_component_1 = require("./propriedade/propriedade-list.component");
var propriedade_edit_component_1 = require("./propriedade/propriedade-edit.component");
var propriedade_new_component_1 = require("./propriedade/propriedade-new.component");
var rebanho_list_component_1 = require("./rebanho/rebanho-list.component");
var rebanho_edit_component_1 = require("./rebanho/rebanho-edit.component");
var rebanho_new_component_1 = require("./rebanho/rebanho-new.component");
var usuario_list_component_1 = require("./usuario/usuario-list.component");
var usuario_new_component_1 = require("./usuario/usuario-new.component");
var usuario_edit_component_1 = require("./usuario/usuario-edit.component");
var appRoutes = [
    /*{

        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, */
    {
        path: 'usuario/list',
        component: usuario_list_component_1.UsuarioListComponent
    },
    {
        path: 'usuario/new',
        component: usuario_new_component_1.UsuarioNewComponent
    },
    {
        path: 'usuarios/:id/edit',
        component: usuario_edit_component_1.UsuarioEditComponent
    },
    {
        path: 'rebanho/list',
        component: rebanho_list_component_1.RebanhoListComponent
    },
    {
        path: 'rebanho/new',
        component: rebanho_new_component_1.RebanhoNewComponent
    },
    {
        path: 'rebanhos/:id/edit',
        component: rebanho_edit_component_1.RebanhoEditComponent
    },
    {
        path: 'propriedade/list',
        component: propriedade_list_component_1.PropriedadeListComponent
    },
    {
        path: 'propriedade/new',
        component: propriedade_new_component_1.PropriedadeNewComponent
    },
    {
        path: 'propriedade/:id/edit',
        component: propriedade_edit_component_1.PropriedadeEditComponent
    },
    {
        path: 'medida/list',
        component: medida_list_component_1.MedidaListComponent
    },
    {
        path: 'medida/new',
        component: medida_new_component_1.MedidaNewComponent
    },
    {
        path: 'medida/:id/edit',
        component: medida_edit_component_1.MedidaEditComponent
    },
    {
        path: 'categoriaanimal/list',
        component: categoriaanimal_list_component_1.CategoriaAnimalListComponent
    },
    {
        path: 'categoriaanimal/new',
        component: categoriaanimal_new_component_1.CategoriaAnimalNewComponent
    },
    {
        path: 'categoriaanimal/:id/edit',
        component: categoriaanimal_edit_component_1.CategoriaEditComponent
    },
    {
        path: '',
        redirectTo: '/tasks/list',
        pathMatch: 'full'
    },
    {
        path: 'tasks/list',
        component: task_list_component_1.TaskListComponent
    },
    {
        path: 'tasks/new',
        component: task_new_component_1.TaskNewComponent
    },
    {
        path: 'tasks/:id/edit',
        component: task_edit_component_1.TaskEditComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map