import { RecipeService } from '../../services/recipe.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonButtons, IonButton, IonIcon, IonItem, IonInput, IonList, IonThumbnail, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonItem,
    IonInput,
    IonList,
    IonThumbnail,
    IonLabel,
    CommonModule,
    FormsModule,
    RouterModule
  ]

})
export class HomePage implements OnInit {

  ingredients: string = "";
  recipes: any[] = [];

  constructor(
    private router: Router,
    private recipeService: RecipeService

  ) { }


  ngOnInit() {
  }
  searchRecipes() {
    if (!this.ingredients) {
      return;
    }

    this.recipeService.searchRecipes(this.ingredients).subscribe(
      (data: any) => {
        this.recipes = data.results;
      },
      (error) => {
        console.error('Error fetching recipes', error);
      }
    );

  }

  openRecipe(recipe: any) {
    this.router.navigate(
      ['/recipe-details', recipe.id],
      { state: { recipe } }
    );
  }



}
