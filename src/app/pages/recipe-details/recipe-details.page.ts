import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FavouritesService } from '../../services/favourites.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecipeDetailsPage implements OnInit {
  results: any[] = [];

  constructor(private router: Router,
    private favouritesService: FavouritesService
  ) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.results = nav?.extras?.state?.['results'] || [];
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
