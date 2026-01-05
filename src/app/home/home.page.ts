import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonButton, IonIcon
}
  from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, RouterModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon],
})
export class HomePage {
  constructor(private router: Router) { }

  goToSettings(event: Event) {
    event.stopPropagation();
    this.router.navigate(['/settings']);
  }

  goToFavourites(event: Event) {
    event.stopPropagation();
    this.router.navigate(['/favourites']);
  }

}

