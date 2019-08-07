import { ActivatedRoute, Router } from '@angular/router';
import { PokeApiService } from './../poke-api.service';
import { Component, OnInit } from '@angular/core';
import { PokemonId } from '../pokemonId';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pokemon: PokemonId;
  sub: any;
  id: any;
  

  constructor(private pokeApi:PokeApiService, private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    
  }

  onSearch(term:string) {
    if (term == ""){}
    else {
      this.route.navigate(["pokemonDetails", term])
    }
  }

  /*this.router.params.subscribe(params => {
    this.id = params['id'];
  });*/
  
}
