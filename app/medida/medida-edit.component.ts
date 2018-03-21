import {Component, OnInit} from "@angular/core";
import {Medida} from "./medida";
import {MedidaService} from "./medida.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MessageService} from "../message.service";


declare var module: any;

@Component({
    selector: 'medida-edit',
    templateUrl: 'medida-edit.component.html',
    moduleId: module.id
})

export class MedidaEditComponent implements OnInit{

    medida: Medida;
    constructor(
        private medidaService: MedidaService,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ){}
    submit(){
        this.messageService.messages.push({
            type:'sucess',
            message: 'Medida alterada com sucesso'
        });
        this.router.navigate(['medidas', 'list']);
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) =>  {
            let id = +params['id'];
            this.medida = this.medidaService.getMedida(id);
            if(!this.medida){
                alert('Medida não existe');
            }
        });
    }


}