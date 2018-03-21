import {Component, OnInit} from "@angular/core";
import {Propriedade} from "./propriedade";
import {PropriedadeService} from "./propriedade.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MessageService} from "../message.service";


declare var module: any;


@Component({
    selector: 'propriedade-edit',
    templateUrl: 'propriedade-edit.component.html',
    moduleId: module.id
})

export class PropriedadeEditComponent implements OnInit{

    propriedade: Propriedade;

    constructor(
        private propriedadeService: PropriedadeService,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ){}
    submit(){
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Propriedade alterada com sucesso'
        });
        this.router.navigate(['propriedade', 'list']);
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.propriedade = this.propriedadeService.getPropriedade(id);
            if(!this.propriedade){
                alert('Propriedade não existe');
            }
        });
    }
}
