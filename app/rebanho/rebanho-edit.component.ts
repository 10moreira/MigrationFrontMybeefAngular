import {Component, OnInit} from "@angular/core";
import {Rebanho} from "./rebanho";
import {RebanhoService} from "./rebanho.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MessageService} from "../message.service";


declare var module: any;
@Component({
    selector: 'rebanho-edit',
    templateUrl: 'rebanho-edit.component.html',
    moduleId: module.id
})
export class RebanhoEditComponent implements OnInit{
    rebanho: Rebanho;


    constructor(
        private rebanhoService: RebanhoService,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ){}

    submit(){
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Rebanho alterada com sucesso'
        });
        this.router.navigate(['rebanho', 'list']);
    }
    ngOnInit(): void{
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.rebanho = this.rebanhoService.getRebanho(id);
            if(!this.rebanho){
                alert('Rebanho não existe');
            }
        });
    }
}