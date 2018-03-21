import {Component} from "@angular/core";
import {CategoriaAnimal} from "./categoriaanimal";
import {CategoriaAnimalService} from "./categoriaanimal.service";
import {Router} from "@angular/router";


declare var module: any;

@Component({

    selector: 'categoriaanimal-new',
    templateUrl: 'categoriaanimal-new.component.html',
    moduleId: module.id

})

export class CategoriaAnimalNewComponent{

    categoriaAnimal: CategoriaAnimal= {
        id: 0,
        nomeCategoria: ''
    };

    constructor(
        private categoriaAnimalService: CategoriaAnimalService,
        private router: Router
    ){}

    submit(){
        this.categoriaAnimalService.createCategoria(this.categoriaAnimal);
        this.router.navigate(['categoriaanimal', 'new']);
    }

}