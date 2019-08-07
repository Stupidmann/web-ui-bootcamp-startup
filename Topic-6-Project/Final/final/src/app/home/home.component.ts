import { PokemonId } from './../pokemonId';
import { PokeApiService } from './../poke-api.service';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  pokemon$: Pokemon[];
  pokemon:PokemonId;
  searchTerm:string;

  constructor(private pokeApi:PokeApiService, private router:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokeApi.getPokemon().subscribe(
      (data:Pokemon[]) => this.pokemon$ = data);
  }

}
