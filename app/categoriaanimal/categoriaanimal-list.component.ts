import {Component, OnInit} from "@angular/core";
import {CategoriaAnimal} from "./categoriaanimal";
import {Router} from "@angular/router";
import {CategoriaAnimalService} from "./categoriaanimal.service";


declare var  module: any;


@Component({
    selector: 'categoria-list',
    templateUrl: 'categoriaanimal-list.component.html',
    moduleId: module.id
})

export class CategoriaAnimalListComponent implements OnInit{

   categoriaanimal:CategoriaAnimal[];
   selectedCategoria:CategoriaAnimal;


   constructor(private categoriaAnimal: CategoriaAnimalService, private router: Router){}

   goToEdit(id: number){
       this.router.navigate(['categoriaanimal', id, 'edit']);
   }

   deleteCategoria(id: number){
       this.categoriaAnimal.getCategoria(id);
   }


    ngOnInit(): void {
       this.categoriaanimal = this.categoriaAnimal.getCategorias();
    }

}