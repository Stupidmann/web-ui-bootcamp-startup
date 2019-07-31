import { Component, OnInit } from '@angular/core';
import { LIST } from './mockList';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    constructor() {
        this.saveOnLS();
    }

    ngOnInit() {
        
    }

    list = LIST;
    
    saveOnLS() {
        let List:object = LIST;
        localStorage.setItem("Movies",JSON.stringify(List));
    }
}
