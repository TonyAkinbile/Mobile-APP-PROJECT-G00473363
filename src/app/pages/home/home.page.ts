import { RecipeService } from '../../services/recipe.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonButtons, IonButton, IonIcon, IonItem, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonItem,
    IonInput,
    CommonModule,
    FormsModule,
    RouterModule
  ]

})
export class HomePage implements OnInit {

  ingredients: string = "";


  constructor(
    private router: Router,
    private recipeService: RecipeService

  ) { }


  ngOnInit() {
  }
  searchRecipes() {
    this.router.navigate(['/recipe-details'], {
      queryParams: { ingredients: this.ingredients }
    });
  }




}
