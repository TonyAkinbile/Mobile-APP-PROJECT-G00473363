import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'recipe-details/:id',
    loadComponent: () =>
      import('./pages/recipe-details/recipe-details.page').then((m) => m.RecipeDetailsPage),
  },
  {
    path: 'favourites',
    loadComponent: () =>
      import('./pages/favourites/favourites.page').then((m) => m.FavouritesPage),
  },

  {
    path: 'favourite',
    redirectTo: 'favourites',
    pathMatch: 'full',
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then((m) => m.SettingsPage),
  },

];
