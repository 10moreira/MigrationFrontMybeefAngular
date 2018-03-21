import {Component, OnInit} from "@angular/core";
import {Propriedade} from "./propriedade";
import {PropriedadeService} from "./propriedade.service";
import {Router} from "@angular/router";


declare var module: any;

@Component({
    selector: 'propriedade-list',
    templateUrl: 'propriedade-list.component.html',
    moduleId: module.id
})


export class PropriedadeListComponent implements OnInit{

    propriedades: Propriedade[];
    selectedPropriedade: Propriedade;
    constructor(private propriedadeService: PropriedadeService, private router: Router){}
    goToEdit(id:number){
        this.router.navigate(['propriedade', 'id', 'edit']);
    }
    deletePropriedade(id:number){
        this.propriedadeService.deletePropriedade(id);
    }
    ngOnInit(): void{
        this.propriedades = this.propriedadeService.getPropriedades();
    }
}