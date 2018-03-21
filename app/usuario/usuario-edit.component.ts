import {Component, OnInit} from "@angular/core";
import {Usuario} from "./usuario";
import {UsuarioService} from "./usuario.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MessageService} from "../message.service";


declare var module: any;

@Component({
    selector: 'usuario-edit',
    templateUrl: 'usuario-edit.component.html',
    moduleId: module.id
})

export class UsuarioEditComponent implements OnInit{

    usuario: Usuario;

    constructor(
        private usuarioService: UsuarioService,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ){}

    submit(){
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Usuario alterada com sucesso'
        });
        this.router.navigate(['usuarios', 'list']);
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.usuario = this.usuarioService.getUsuario(id);
            if(!this.usuario){
                alert('Usuario não existe');
            }
        });
    }
}