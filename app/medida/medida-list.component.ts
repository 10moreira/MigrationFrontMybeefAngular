import {Component, OnInit} from "@angular/core";
import {Medida} from "./medida";
import {MedidaService} from "./medida.service";
import {Router} from "@angular/router";


declare var module: any;

@Component({
    selector: 'medida-list',
    templateUrl: 'medida-list.component.html',
    moduleId: module.id
})

export class MedidaListComponent implements OnInit{

    medidas:Medida[];
    selectedMedida:Medida;
    constructor(private medidaService: MedidaService, private router: Router){}
    goToEdit(id:number){
        this.router.navigate(['medida', id, 'edit']);
    }
    deleteMedida(id:number){
        this.medidaService.deleteMedida(id);
    }

    ngOnInit(): void {
        this.medidas = this.medidaService.getMedidas();

    }

}