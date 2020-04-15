import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quizzes.service';
import {Question} from "../../../../../../../models/question.model";
import {Quiz} from "../../../../../../../models/quiz.model";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {QUIZ_LIST} from "../../../../../../../mocks/quizzes.mock";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public questions: Question[];
  quizSelected: Quiz;

  constructor(private quizService: QuizService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('quizId')+"";
   // console.log(id);
   // this.quizService.setSelectedQuiz(id);
   // this.quizSelected=this.quizService.quizsel;
    this.quizSelected= QUIZ_LIST[0];
  //  console.log(this.quizService.quizsel);
    console.log(this.quizSelected);
  }

}
