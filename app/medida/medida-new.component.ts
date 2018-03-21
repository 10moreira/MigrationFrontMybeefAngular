import {Component} from "@angular/core";
import {Medida} from "./medida";
import {MedidaService} from "./medida.service";
import {Router} from "@angular/router";


declare var module: any;


@Component({
    selector: 'medida-new',
    templateUrl: 'medida-new.component.html',
    moduleId: module.id
})

export class MedidaNewComponent{


    medida: Medida= {
      id: 0,
      valor: 1,
      ano: 2,
      propriedade_id: 3
    };

    constructor(
        private medidaService: MedidaService,
        private router: Router
    ){}

    submit(){
        this.medidaService.createMedida(this.medida);
        this.router.navigate(['medidas', 'new']);
    }
}



