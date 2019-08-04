import { PokeApiService } from './../poke-api.service';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemon$: Pokemon[];

  constructor(private pokeApi:PokeApiService) { 
    
  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokeApi.getPokemon().subscribe(
      (data:Pokemon[]) => this.pokemon$ = data);
  }

}
