import { Component, OnInit } from '@angular/core';
import * as exercises from '../data/exercises.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'einmaleins';
  exercise = '';

  ngOnInit() {
  
    const exercisePart = exercises.[1];

    this.exercise = exercisePart[Math.floor(Math.random() * exercisePart.length)];

  }

}
