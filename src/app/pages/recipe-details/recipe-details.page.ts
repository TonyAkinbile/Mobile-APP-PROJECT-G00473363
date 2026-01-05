import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FavouritesService } from '../../services/favourites.service';
import { IonList, IonItem, IonThumbnail, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
    IonIcon,
    CommonModule,
    FormsModule
  ]
})
export class RecipeDetailsPage implements OnInit {
  recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private favouritesService: FavouritesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.recipeService.getRecipeById(+id).subscribe((data) => {
        this.recipe = data;
      });
    }
  }

  toggleFavourite(recipe: any) {
    if (this.favouritesService.isFavourite(recipe.id)) {
      this.favouritesService.removeFavourite(recipe.id);
    } else {
      this.favouritesService.addFavourite(recipe);
    }
  }

  isFavourite(id: number): boolean {
    return this.favouritesService.isFavourite(id);
  }


}
