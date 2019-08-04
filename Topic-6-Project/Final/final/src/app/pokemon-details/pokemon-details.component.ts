import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from './../poke-api.service';
import { Component, OnInit } from '@angular/core';
import { PokemonId } from '../pokemonId';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokeObs: Observable<PokemonId>;
  pokemon:PokemonId;
  pokeImg:any;
  sub: any;

  constructor(private pokeApi:PokeApiService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.pokeObs = this.pokeApi.getDetails(403);

  }

  getImageUrl(id:number) { //lleva id como param
    return this.pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  /*getPokemonId() {
    this.sub = this.route.params.subscribe(params => { 
      this.pokeApi
      .getPokemonId(params.id)
      .subscribe(
        (data: PokemonId) => this.pokemon = data
      );
    });
  }*/

  /*getPokemon() {
    this.pokeApi.getPokemon().subscribe(
      (data:Pokemon[]) => this.pokemon$ = data);
  }*/

  

}
