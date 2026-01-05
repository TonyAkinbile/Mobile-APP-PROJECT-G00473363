import { RouterLink } from '@angular/router';
import { IonList, IonItem } from '@ionic/angular/standalone';
import { FavouritesService } from '../../services/favourites.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonThumbnail, IonLabel,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
    IonIcon,
    CommonModule,
    RouterLink
  ]

})
export class FavouritesPage {
  favourites: any[] = [];


  constructor(private favouritesService: FavouritesService) { }

  ionViewWillEnter() {
    this.favourites = this.favouritesService.getFavourites();
  }
  removeFavourite(id: number) {
    this.favouritesService.removeFavourite(id);
    this.favourites = this.favouritesService.getFavourites();
  }

}
