import {Component, OnInit} from "@angular/core";
import {CategoriaAnimal} from "./categoriaanimal";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MessageService} from "../message.service";
import {CategoriaAnimalService} from "./categoriaanimal.service";


declare var module: any;

@Component({
    selector: 'categoria-edit',
    templateUrl: 'categoriaanimal-edit.component.html',
    moduleId: module.id
})

export class CategoriaEditComponent implements OnInit{

    categoriaanimal:CategoriaAnimal;


    constructor(
        private categoriaanimalService: CategoriaAnimalService,
        private route: ActivatedRoute,
        private router: Router,
        private messageService: MessageService
    ){}

    submit(){
        this.messageService.messages.push({
            type: 'sucess',
            message: 'Categoria alterada com sucesso'
        });
        this.router.navigate(['categorias', 'list']);
    }

    ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.categoriaanimal = this.categoriaanimalService.getCategoria(id);
            if(!this.categoriaanimal){
                alert('Categoria não existe');
            }
        });

    }

}