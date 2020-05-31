import { Component, OnInit } from '@angular/core';
import { exercisesData } from './exercises';


class Exercise {
  name: string;
  exercises: any[];
}

class Calculation {
  term: string;
  result: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'einmaleins';
  exercise: Calculation = null;
  doneExercises: Calculation[] = [];

  ngOnInit() {

    let exercises: Exercise[] = exercisesData;

    // TODO get name from user selection
    const exercisePart = exercises.find(x => x.name === "1er Reihe").exercises;

    this.exercise = exercisePart[Math.floor(Math.random() * exercisePart.length)];


    // TODO if result was right
    if (true) {
      this.doneExercises.push(this.exercise);
    }

    console.log(this.doneExercises);
  }

}
