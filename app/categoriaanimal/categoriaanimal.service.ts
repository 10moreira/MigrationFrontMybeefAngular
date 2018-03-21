import {CategoriaAnimal} from "./categoriaanimal";
import {Injectable} from "@angular/core";
import {MessageService} from "../message.service";


let CATEGORIAS: CategoriaAnimal[] = [
    {id: 1, nomeCategoria: 'Vacas de cria'},
    {id: 2, nomeCategoria: 'Vacas de descarte'},
    {id: 3, nomeCategoria: 'Terneiros'},
    {id: 4, nomeCategoria: 'Terneiras'},
    {id: 5, nomeCategoria: 'Novilhos 13-24'},
    {id: 6, nomeCategoria: 'Novilhos 25-36'},
    {id: 7, nomeCategoria: 'Novilhos > 36 '}

];


@Injectable()
export class CategoriaAnimalService {

    constructor(private messageService: MessageService){}

    getCategorias(): CategoriaAnimal[] {

        return CATEGORIAS;
    }

    getCategoria(id: number): CategoriaAnimal|null{

        let array = this.getCategorias().filter(item => item.id == id);
        return array.length ? array[0] : null;

    }

    createCategoria(categoriaAnimal: CategoriaAnimal){
        categoriaAnimal.id = this.getCategorias().length +1;
        this.getCategorias().push(categoriaAnimal);
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Categoria incluida'
        });
    }

    deleteCategoria(id: number){
        let index = this.getCategorias().findIndex(item => item.id == id);
        if(index != -1){
            this.getCategorias().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Tarefa excluida'
        });
    }

}


