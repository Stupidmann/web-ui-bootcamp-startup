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
  pokeObs: any;

  constructor(private pokeApi:PokeApiService) { 
    
    this.getPokemon();
  }

  ngOnInit() {
    this.pokeObs = this.pokeApi.getPokemon();
    console.log(this.pokeObs)
    console.log(this.pokemon$)
  }

  getPokemon() { //busqueda por id
    this.pokeApi.getPokemon().subscribe(
      (data:Pokemon[]) => this.pokemon$ = data);
  }

}
