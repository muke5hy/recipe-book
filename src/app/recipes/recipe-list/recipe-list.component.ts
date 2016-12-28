import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy ', 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg');
  constructor() { };

  ngOnInit() {
  }


  onSelected(recipe: Recipe){
    return this.recipeSelected.emit(recipe);
  }
}

