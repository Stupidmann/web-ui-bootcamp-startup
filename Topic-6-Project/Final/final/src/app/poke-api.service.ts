import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  pokeUrl = "http://pokeapi.co/api/v2/";

  constructor(private _http:HttpClient) { }

  getPokemon() {
    return this._http.get<Pokemon[]>(`${this.pokeUrl}pokemon`);
  }
}
