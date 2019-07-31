import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieList = [
    { name: 'Batman Begins', year:2005, duration:140 },
    { name: 'Django Unchained',year:2012, duration:165 },
    { name: 'The Godfather',year:1972, duration:178 },
    { name: 'Pulp Fiction',year:1994, duration:178 },
    { name: 'Fury', year:2014, duration:135}
  ];
  movieName;
  movieYear;
  movieDuration;
  movieSelected;
  movie;

  mostrar:boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.movie = this.movieList;
  }

  addMovie() {
    this.movieList.push(
      {
        name:this.movieName,
        year:this.movieYear,
        duration:this.movieDuration
      }
    )
  }

  deleteMovie(name) {
    for(let i=0; i < this.movieList.length; i++){
      if (this.movieList[i]["name"] === name){
        this.movieList.splice(i,1);
      }
    }
  }

  onSelect(name) {
    this.mostrar = !this.mostrar;
    this.movieSelected = [];
    for(let i=0; i < this.movieList.length; i++){
      if (this.movieList[i]["name"] === name){
        this.movieSelected.push(this.movieList[i]);
      }
    }
  }

  editMovie(name,year,duration) {
    for(let i=0; i < this.movieList.length; i++){
      if (this.movieList[i]["name"] === name){

        this.movieList.splice(i,1);
        this.movieList.push(
          {
            name:name,
            year:year,
            duration:duration
          }
        )
      }
    }
  }
}
