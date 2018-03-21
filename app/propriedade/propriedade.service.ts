import {Propriedade} from "./propriedade";
import {Injectable} from "@angular/core";
import {MessageService} from "../message.service";


let PROPRIEDADE: Propriedade[] = [

    {id: 1, usuario_id: 3, cidades_id: 5, pais_id: 4, data: '22/06/2016', nome: 'Joao da Silva ', nro_car: '4we', tamanho: 68, localidade: 'Bagé'},
    {id: 2, usuario_id: 3, cidades_id: 5, pais_id: 4, data: '22/06/2016', nome: 'Joao da Silva ', nro_car: '4df', tamanho: 68, localidade: 'Bagé'},
    {id: 3, usuario_id: 3, cidades_id: 5, pais_id: 4, data: '22/06/2016', nome: 'Joao da Silva ', nro_car: '4et5', tamanho: 68, localidade: 'Bagé'},
    {id: 4, usuario_id: 3, cidades_id: 5, pais_id: 4, data: '22/06/2016', nome: 'Joao da Silva ', nro_car: '4asc', tamanho: 68, localidade: 'Bagé'},
    {id: 5, usuario_id: 3, cidades_id: 5, pais_id: 4, data: '22/06/2016', nome: 'Joao da Silva ', nro_car: '4xsa', tamanho: 68, localidade: 'Bagé'}

];

@Injectable()
export class PropriedadeService{

    constructor(private messageService: MessageService){}

    getPropriedades(): Propriedade[] {
        return PROPRIEDADE;
    }

    getPropriedade(id: number): Propriedade|null {
        let array = this.getPropriedades().filter(item => item.id == id);
        return array.length ? array[0] : null;
    }

    createPropriedade(propriedade: Propriedade){
        propriedade.id = this.getPropriedades().length + 1;
        this.getPropriedades().push(propriedade);
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Propriedade incluída com sucesso'
        });
    }

    deletePropriedade(id: number){
        let index = this.getPropriedades().findIndex(item => item.id == id);
        if(index != -1){
            this.getPropriedades().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Propriedade excluida com sucesso'
        });
    }
 }