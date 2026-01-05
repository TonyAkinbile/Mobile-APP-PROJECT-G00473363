import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private searchUrl = 'https://api.spoonacular.com/recipes/complexSearch';
    private detailsUrl = 'https://api.spoonacular.com/recipes';
    private apiKey = '70759a4f7911402abcc53d3c51d3b759';

    constructor(private http: HttpClient) { }

    // Existing: search recipes
    searchRecipes(ingredients: string): Observable<any> {
        const params = {
            query: ingredients,
            apiKey: this.apiKey,
            number: 20
        };

        return this.http.get(this.searchUrl, { params });
    }

    //get recipe by ID
    getRecipeById(id: number): Observable<any> {
        const url = `https://api.spoonacular.com/recipes/${id}/information`;

        const params = {
            apiKey: this.apiKey
        };

        return this.http.get(url, { params });
    }
}
