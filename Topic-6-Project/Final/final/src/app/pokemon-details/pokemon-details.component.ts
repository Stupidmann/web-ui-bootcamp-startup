import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from './../poke-api.service';
import { Component, OnInit, Input } from '@angular/core';
import { PokemonId } from '../pokemonId';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input("pokemon") poke: Pokemon;
  
  pokeObs: Observable<PokemonId>;  
  pokemon:PokemonId;
  pokeImg:any;
  sub: any;

  constructor(private pokeApi:PokeApiService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.getPokemonId();
  }

  getImageUrl(id:number) {
    return this.pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getPokemonId() {
    this.sub = this.router.params.subscribe(params => { 
      this.pokeApi
      .getPokemonId(params.id)
      .subscribe((data: PokemonId) => this.pokemon = data);
    });
  }
  
}
