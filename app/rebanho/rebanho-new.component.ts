import {Component} from "@angular/core";
import {Rebanho} from "./rebanho";
import {RebanhoService} from "./rebanho.service";
import {Router} from "@angular/router";


declare var module: any;

@Component({
    selector: 'rebanho-new',
    templateUrl: 'rebanho-new.component.html',
    moduleId: module.id
})
export class RebanhoNewComponent{
    rebanho: Rebanho= {

            id: 0,
            ano: 1,
            propriedade_id: 2,
            categoria_animal_id: 3,
            qtd_estocada: 4,
            peso_estocado: 5,
            qtd_vendida: 6,
            peso_vendido: 7
    };

    constructor(
        private rebanhoService: RebanhoService,
        private router: Router
    ){}

    submit(){
        this.rebanhoService.createRebanho(this.rebanho);
        this.router.navigate(['rebanhos', 'list']);
    }
}