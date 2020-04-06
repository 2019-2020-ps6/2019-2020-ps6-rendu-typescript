import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quizzes.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private quizService:QuizService) { }
  public questions = [];

  ngOnInit(): void {

  }

}
