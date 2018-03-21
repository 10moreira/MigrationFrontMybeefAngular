import {Medida} from "./medida";
import {Injectable} from "@angular/core";
import {MessageService} from "../message.service";


let MEDIDAS: Medida[] =  [

    {id: 1, valor: 239, ano: 2018, propriedade_id: 4},
    {id: 2, valor: 260, ano: 2017, propriedade_id: 2},
    {id: 3, valor: 220, ano: 2015, propriedade_id: 6},
    {id: 4, valor: 200, ano: 2015, propriedade_id: 4}
];

@Injectable()
export class MedidaService {
    constructor(private messageService: MessageService){}
    getMedidas():Medida[] {
        return MEDIDAS;
    }
    getMedida(id:number): Medida|null{
        let array = this.getMedidas().filter(item => item.id == id);
        return array.length ? array[0] : null;
    }
    createMedida(medida: Medida){
        medida.id = this.getMedidas().length +1;
        this.getMedidas().push(medida);
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Medida incluida com sucesso'

        });
    }

    deleteMedida(id: number){
        let index = this.getMedidas().findIndex(item => item.id == id);
        if(index != -1){
                this.getMedidas().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Medida excluida com sucesso'
        });
    }

}