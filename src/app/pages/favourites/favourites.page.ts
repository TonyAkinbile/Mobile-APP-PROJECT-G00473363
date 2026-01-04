import { FavouritesService } from '../../services/favourites.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FavouritesPage implements OnInit {
  favourites: any[] = [];


  constructor(private favouritesService: FavouritesService) { }

  ngOnInit() {
    this.favourites = this.favouritesService.getFavourites();
  }
  removeFavourite(id: number) {
    this.favouritesService.removeFavourite(id);
    this.favourites = this.favouritesService.getFavourites();
  }

}
