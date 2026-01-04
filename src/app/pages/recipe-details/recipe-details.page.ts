import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router,
    private favouritesService: FavouritesService
  ) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.recipe = nav?.extras?.state?.['recipe'];
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
