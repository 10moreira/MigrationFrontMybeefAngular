import {Component, OnInit} from "@angular/core";
import {Rebanho} from "./rebanho";
import {RebanhoService} from "./rebanho.service";
import {Router} from "@angular/router";


declare var module: any;

@Component({
    selector: 'rebanho-list',
    templateUrl: 'rebanho-list.component.html',
    moduleId: module.id
})
export class RebanhoListComponent implements OnInit{

    rebanhos: Rebanho[];
    selectedRebanho:Rebanho;

    constructor(private rebanhoService: RebanhoService, private router: Router){}

    goToEdit(id: number){
        this.router.navigate(['rebanhos', id, 'edit']);
    }

    deleteRebanho(id: number){
        this.rebanhoService.deleteRebanho(id);
    }

    ngOnInit(): void {

        this.rebanhos = this.rebanhoService.getRebanhos();
    }

}