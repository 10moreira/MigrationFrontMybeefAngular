import {Component} from "@angular/core";
import {Usuario} from "./usuario";
import {UsuarioService} from "./usuario.service";
import {Router} from "@angular/router";


declare var module: any;

@Component({
    selector: 'usuario-new',
    templateUrl: 'usuario-new.component.html',
    moduleId: module.id
})
export class UsuarioNewComponent{
    usuario: Usuario= {
        id: 0,
        cidades_id: 1,
        pais_id: 2,
        login: '',
        email: '',
        senha: '',
        perfil: '',
        nome: '',
        localidade: '',
        telefone: ''

    };

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ){}

    submit(){
        this.usuarioService.createUsuario(this.usuario);
        this.router.navigate(['usuarios', 'list']);
    }
}
