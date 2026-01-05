// Import necessary services, modules, and components
import { SettingsService, Units } from '../../services/settings.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FavouritesService } from '../../services/favourites.service';
import { IonList, IonItem, IonThumbnail, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

// Define the component metadata
@Component({
  selector: 'app-recipe-details', // Component selector
  templateUrl: './recipe-details.page.html', // HTML template for the component
  styleUrls: ['./recipe-details.page.scss'], // Styles for the component
  standalone: true, // Indicates this is a standalone component
  imports: [
    // Import Ionic components and Angular modules
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
  recipe: any; // Holds the recipe details

  units: Units = 'metric'; // Default units (metric)


  // Inject required services into the constructor
  constructor(
    private route: ActivatedRoute, // For accessing route parameters
    private router: Router, // For navigation
    private recipeService: RecipeService, // Service to fetch recipe data
    private favouritesService: FavouritesService, // Service to manage favourites
    private settingsService: SettingsService // Service for app settings
  ) { }

  // Lifecycle hook that runs when the component is initialized
  ngOnInit() {
    this.units = this.settingsService.getUnits(); // Load the saved units from the service
    // Get the recipe ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.recipeService.getRecipeById(+id).subscribe((data) => { // Fetch recipe details
        this.recipe = data; // Store the recipe details
      });
    }
  }


  // Toggle the recipe's favourite status
  toggleFavourite(recipe: any) {
    const alreadyFav = this.favouritesService.isFavourite(recipe.id); // Check if it's already a favourite

    if (alreadyFav) {
      // Remove from favourites if it already is
      this.favouritesService.removeFavourite(recipe.id);
    } else {
      // Add to favourites if it isn't
      this.favouritesService.addFavourite(recipe);

      // Navigate to the favourites page
      this.router.navigate(['/favourites']);
    }
  }

  // Check if a recipe is marked as a favourite
  isFavourite(id: number): boolean {
    return this.favouritesService.isFavourite(id); // Return favourite status
  }
}