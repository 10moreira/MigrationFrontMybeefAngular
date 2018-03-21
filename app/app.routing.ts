import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaskListComponent} from "./task/task-list.component";
import {TaskEditComponent} from "./task/task-edit.component";
import {TaskNewComponent} from "./task/task-new.component";
import {CategoriaAnimalListComponent} from "./categoriaanimal/categoriaanimal-list.component";
import {CategoriaAnimalNewComponent} from "./categoriaanimal/categoriaanimal-new.component";
import {CategoriaEditComponent} from "./categoriaanimal/categoriaanimal-edit.component";
import {MedidaListComponent} from "./medida/medida-list.component";
import {MedidaNewComponent} from "./medida/medida-new.component";
import {MedidaEditComponent} from "./medida/medida-edit.component";
import {PropriedadeListComponent} from "./propriedade/propriedade-list.component";
import {PropriedadeEditComponent} from "./propriedade/propriedade-edit.component";
import {PropriedadeNewComponent} from "./propriedade/propriedade-new.component";
import {RebanhoListComponent} from "./rebanho/rebanho-list.component";
import {RebanhoEditComponent} from "./rebanho/rebanho-edit.component";
import {RebanhoNewComponent} from "./rebanho/rebanho-new.component";
import {UsuarioListComponent} from "./usuario/usuario-list.component";
import {UsuarioNewComponent} from "./usuario/usuario-new.component";
import {UsuarioEditComponent} from "./usuario/usuario-edit.component";

const appRoutes: Routes = [
    /*{

        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, */

    {
        path: 'usuario/list',
        component: UsuarioListComponent
    },

    {
        path: 'usuario/new',
        component: UsuarioNewComponent
    },

    {
        path: 'usuarios/:id/edit',
        component: UsuarioEditComponent
    },

    {
       path: 'rebanho/list',
       component:RebanhoListComponent
    },

    {
      path: 'rebanho/new',
      component:RebanhoNewComponent
    },

    {
        path: 'rebanhos/:id/edit',
        component: RebanhoEditComponent
    },

    {
        path: 'propriedade/list',
        component:PropriedadeListComponent
    },

    {
        path: 'propriedade/new',
        component:PropriedadeNewComponent
    },

    {
        path: 'propriedade/:id/edit',
        component:PropriedadeEditComponent
    },

    {
        path: 'medida/list',
        component: MedidaListComponent
    },

    {
       path: 'medida/new',
       component: MedidaNewComponent
    },

    {
      path: 'medida/:id/edit',
      component: MedidaEditComponent
    },

    {
        path: 'categoriaanimal/list',
        component: CategoriaAnimalListComponent
    },

    {
        path:'categoriaanimal/new',
        component: CategoriaAnimalNewComponent
    },

    {
      path:'categoriaanimal/:id/edit',
      component: CategoriaEditComponent
    },

    {
        path: '',
        redirectTo: '/tasks/list',
        pathMatch: 'full'
    },
    {
        path: 'tasks/list',
        component: TaskListComponent
    },
    {
        path: 'tasks/new',
        component: TaskNewComponent
    },
    {
        path: 'tasks/:id/edit',
        component: TaskEditComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);