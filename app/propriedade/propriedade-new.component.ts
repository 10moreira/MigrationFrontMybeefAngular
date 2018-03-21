import {Component} from "@angular/core";
import {Propriedade} from "./propriedade";
import {PropriedadeService} from "./propriedade.service";
import {Router} from "@angular/router";


declare var module: any;


@Component({
    selector: 'propriedade-new',
    templateUrl: 'propriedade-new.component.html',
    moduleId: module.id
})


export class PropriedadeNewComponent{

    propriedade: Propriedade= {
        id: 0,
        usuario_id: 1,
        cidades_id: 2,
        pais_id: 3,
        data: '',
        nome: '',
        nro_car: '',
        tamanho: 7,
        localidade: ''
    };

    constructor(
        private propriedadeService: PropriedadeService,
        private router: Router
    ){}
    submit(){
        this.propriedadeService.createPropriedade(this.propriedade);
        this.router.navigate(['propriedades', 'new']);
    }

}

