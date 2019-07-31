import { Component, OnInit } from '@angular/core';
import { LIST } from './mockList';
import { List } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    list = LIST;
    selectedMovie: List;

    constructor() {
        this.saveOnLS();
    }

    ngOnInit() {
        
    }
    
    saveOnLS() {
        let List:object = LIST;
        localStorage.setItem("Movies",JSON.stringify(List));
    }

    onSelect(list: List): void {
        this.selectedMovie = list;
    }
}
