import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PokemonId } from './pokemonId';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  pokeUrl = "http://pokeapi.co/api/v2/pokemon/";
  imageURL: string;

  constructor(private _http:HttpClient) { }

  getPokemon() {
    return this._http.get<Pokemon[]>(`${this.pokeUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getDetails(id:number) {
    return this._http.get<PokemonId>(`${this.pokeUrl}${id}`)
        .pipe(catchError(this.handleError))
  }

  getPokemonId(id:number): Observable<PokemonId> {
    return this._http.get<PokemonId>(`${this.pokeUrl}${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  

  /*getPokemonId(id:number): Observable<PokemonId> {
    return this._http.get<PokemonId>(`${this.pokeUrl}${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }*/


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
