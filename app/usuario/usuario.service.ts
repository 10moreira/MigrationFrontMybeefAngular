import {Usuario} from "./usuario";
import {Injectable} from "@angular/core";
import {MessageService} from "../message.service";


let USUARIO: Usuario[] = [
    {id: 1, cidades_id: 3, pais_id: 4, login: '12345', email:'mama@gmail.com', senha:'12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067'},
    {id: 2, cidades_id: 3, pais_id: 4, login: '12345', email:'mama@gmail.com', senha:'12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067'},
    {id: 3, cidades_id: 3, pais_id: 4, login: '12345', email:'mama@gmail.com', senha:'12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067'},
    {id: 4, cidades_id: 3, pais_id: 4, login: '12345', email:'mama@gmail.com', senha:'12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067'},
    {id: 5, cidades_id: 3, pais_id: 4, login: '12345', email:'mama@gmail.com', senha:'12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067'},
    {id: 6, cidades_id: 3, pais_id: 4, login: '12345', email:'mama@gmail.com', senha:'12345', perfil: 'Produtor', nome: 'Joao silva', localidade: 'Bagé', telefone: '32471067'},

];

@Injectable()
export class UsuarioService{

    constructor(private messageService: MessageService){}

    getUsuarios(): Usuario[]{
        return USUARIO;
    }

    getUsuario(id:number): Usuario|null{
          let array = this.getUsuarios().filter(item => item.id == id);
          return array.length ? array[0] : null;
    }

    createUsuario(usuario: Usuario){
        usuario.id = this.getUsuarios().length + 1;
        this.getUsuarios().push(usuario);
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Usuario cadastrado com sucesso'
        });
    }

    deleteUsuario(id:number){
        let index = this.getUsuarios().findIndex(item => item.id == id);
        if(index != -1){
            this.getUsuarios().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Usuario excluído com sucesso'
        });
    }

}