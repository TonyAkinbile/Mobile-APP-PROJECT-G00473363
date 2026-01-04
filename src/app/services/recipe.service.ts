import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    private apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
    private apiKey = '70759a4f7911402abcc53d3c51d3b759';  //From project brief

    constructor(private http: HttpClient) { }

    searchRecipes(ingredients: string): Observable<any> {
        const params = {
            query: ingredients,
            apiKey: this.apiKey,
            number: 20
        };

        return this.http.get(this.apiUrl, { params });
    }
}
