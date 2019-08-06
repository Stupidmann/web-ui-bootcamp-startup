import { PipeTransform, Pipe } from '@angular/core';
import { Pokemon } from './pokemon';

@Pipe({
    name:"pokeFilter"
})
export class PokeFilterPipe implements PipeTransform {
    transform(pokemon: any,searchTerm:string):any {
        if (!pokemon || !searchTerm){
            return pokemon;
        }

        return pokemon.filter( (item) => {
            return JSON.stringify(item).toLowerCase().includes(searchTerm);
        });
        /*return pokemon.filter(pokemon => 
            pokemon.results.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);*/
    }
}
