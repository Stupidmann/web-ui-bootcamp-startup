import { PokeApiService } from './../poke-api.service';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemon$: Pokemon[];

  constructor(private pokeApi:PokeApiService) { }

  ngOnInit() {
    console.log(this.getPokemon());
  }

  getPokemon() {
    return this.pokeApi.getPokemon()
      .subscribe(data => this.pokemon$ = data);
  }

}
