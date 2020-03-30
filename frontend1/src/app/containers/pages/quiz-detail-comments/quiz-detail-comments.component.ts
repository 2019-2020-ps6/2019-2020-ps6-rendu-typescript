import { Component, OnInit } from '@angular/core';
import commentData, { IComment } from 'src/app/data/comments';


@Component({
  selector: 'app-quiz-detail-comments',
  templateUrl: './quiz-detail-comments.component.html'
})
export class QuizDetailCommentsComponent implements OnInit {

  constructor() { }
  comments: IComment[] = commentData;

  ngOnInit(): void {
  }

}
