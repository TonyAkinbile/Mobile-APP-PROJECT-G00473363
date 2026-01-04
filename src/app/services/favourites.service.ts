import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FavouritesService {
    private storageKey = 'favouriteRecipes';

    // Get favourites
    getFavourites(): any[] {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
    }

    // Add a recipe to favourites
    addFavourite(recipe: any) {
        const favourites = this.getFavourites();
        favourites.push(recipe);
        localStorage.setItem(this.storageKey, JSON.stringify(favourites));
    }

    // Remove favourite
    removeFavourite(id: number) {
        const favourites = this.getFavourites().filter(r => r.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(favourites));
    }

    // Check if recipe is already favourited
    isFavourite(id: number): boolean {
        return this.getFavourites().some(r => r.id === id);
    }
}
