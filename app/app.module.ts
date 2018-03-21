import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {TaskEditComponent} from "./task/task-edit.component";
import {TaskListComponent} from "./task/task-list.component";
import {routing} from "./app.routing";
import {TaskService} from "./task/task.service";
import {TaskNewComponent} from "./task/task-new.component";
import {AlertModule} from 'ng2-bootstrap';
import {MessageService} from "./message.service";
import {CategoriaEditComponent} from "./categoriaanimal/categoriaanimal-edit.component";
import {CategoriaAnimalListComponent} from "./categoriaanimal/categoriaanimal-list.component";
import {CategoriaAnimalNewComponent} from "./categoriaanimal/categoriaanimal-new.component";
import {CategoriaAnimalService} from "./categoriaanimal/categoriaanimal.service";
import {MedidaEditComponent} from "./medida/medida-edit.component";
import {MedidaListComponent} from "./medida/medida-list.component";
import {MedidaNewComponent} from "./medida/medida-new.component";
import {MedidaService} from "./medida/medida.service";
import {PropriedadeEditComponent} from "./propriedade/propriedade-edit.component";
import {PropriedadeListComponent} from "./propriedade/propriedade-list.component";
import {PropriedadeNewComponent} from "./propriedade/propriedade-new.component";
import {PropriedadeService} from "./propriedade/propriedade.service";
import {RebanhoEditComponent} from "./rebanho/rebanho-edit.component";
import {RebanhoListComponent} from "./rebanho/rebanho-list.component";
import {RebanhoNewComponent} from "./rebanho/rebanho-new.component";
import {RebanhoService} from "./rebanho/rebanho.service";
import {UsuarioEditComponent} from "./usuario/usuario-edit.component";
import {UsuarioListComponent} from "./usuario/usuario-list.component";
import {UsuarioNewComponent} from "./usuario/usuario-new.component";
import {UsuarioService} from "./usuario/usuario.service";


@NgModule({
    imports: [BrowserModule, FormsModule, routing, AlertModule],
    declarations: [
        AppComponent, TaskEditComponent, TaskListComponent, TaskNewComponent,
        CategoriaEditComponent, CategoriaAnimalListComponent, CategoriaAnimalNewComponent,
        MedidaEditComponent, MedidaListComponent, MedidaNewComponent,
        PropriedadeEditComponent, PropriedadeListComponent, PropriedadeNewComponent,
        RebanhoEditComponent, RebanhoListComponent, RebanhoNewComponent,
        UsuarioEditComponent, UsuarioListComponent, UsuarioNewComponent,
    ],
    bootstrap: [AppComponent],
    providers: [TaskService, MessageService, CategoriaAnimalService, MedidaService, PropriedadeService, RebanhoService, UsuarioService]
})
export class AppModule{

}