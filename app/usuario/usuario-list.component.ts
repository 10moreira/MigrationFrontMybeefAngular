import {Component, OnInit} from "@angular/core";
import {Usuario} from "./usuario";
import {UsuarioService} from "./usuario.service";
import {Router} from "@angular/router";


declare var module: any;

@Component({
    selector: 'usuario-list',
    templateUrl: 'usuario-list.component.html',
    moduleId: module.id
})

export class UsuarioListComponent implements OnInit{
    usuarios: Usuario[];
    selectedUsuario: Usuario;


    constructor(private usuarioService: UsuarioService, private router: Router){}

    goToEdit(id:number){
        this.router.navigate(['usuarios', id, 'edit']);
    }

    deleteUsuario(id: number){
        this.usuarioService.deleteUsuario(id);
    }

    ngOnInit(): void{
        this.usuarios = this.usuarioService.getUsuarios();
    }



}