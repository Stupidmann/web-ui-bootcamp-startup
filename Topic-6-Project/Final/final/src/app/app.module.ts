import { PokeApiService } from './poke-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    PokemonDetailsComponent,
    MyTeamComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:"", component:HomeComponent},
      { path:"pokemonDetails/:id", component:PokemonDetailsComponent },
      { path:"myTeam", component:MyTeamComponent }, 
      { path:"**", component:NotFoundComponent},
    ])
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
