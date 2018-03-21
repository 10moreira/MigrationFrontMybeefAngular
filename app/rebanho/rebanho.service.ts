import {Rebanho} from "./rebanho";
import {Injectable} from "@angular/core";
import {MessageService} from "../message.service";


let REBANHO: Rebanho[]= [
    {id: 1, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000},
    {id: 2, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000},
    {id: 3, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000},
    {id: 4, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000},
    {id: 5, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000},
    {id: 6, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000},
    {id: 7, ano: 2018, propriedade_id: 3, categoria_animal_id: 5, qtd_estocada: 30, peso_estocado: 4000, qtd_vendida: 289, peso_vendido: 6000},
];

@Injectable()
export class RebanhoService {

    constructor(private messageService: MessageService){}
    getRebanhos(): Rebanho[]{
        return REBANHO;
    }
    getRebanho(id: number): Rebanho|null{
        let array = this.getRebanhos().filter(item => item.id == id);
        return array.length ? array[0] : null;
    }
    createRebanho(rebanho: Rebanho){
        rebanho.id = this.getRebanhos().length + 1;
        this.getRebanhos().push(rebanho);
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Rebanho incluida com sucesso'
        });
    }
    deleteRebanho(id: number){
        let index = this.getRebanhos().findIndex(item => item.id == id);
        if(index != -1){
            this.getRebanhos().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Rebanho excluido com sucesso'
        });
    }
}
