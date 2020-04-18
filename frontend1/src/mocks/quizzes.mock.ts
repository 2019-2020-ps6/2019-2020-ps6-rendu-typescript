import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question[] = [];





export const QUIZ_LIST: Quiz[] = [
  {
    "name":"INFORMATIQUE",
    "theme":"CUPCAKES",
    "img":"/assets/img/5.png",
    "description":"kgkyug",
    "date":"Tue Apr 07 2020",
    "themeColor":"primary",
    "id":"1586222386684",
    "questions":[
      {
        "label":"blabla",
        "img":"/assets/img/detail-small-6.jpg",
        "date":"Wed Apr 15 2020",
        "quizId":"1586222386684",
        "id":"1586972654356",
        "answers":[
          {
            "value":"Toho",
            "img":"/assets/img/big-buck-bunny-poster.jpg",
            "indice":"bien bein",
            "isCorrect":true,
            "questionId":"1586972654356",
            "id":"1586972688439"
          },
          {
            "value":"lomé",
            "img":"/assets/img/card-thumb-3.jpg",
            "indice":"Tata tata",
            "isCorrect":false,
            "questionId":"1586972654356",
            "id":"1586972721708"
          },
          {
            "value":"Une autre reponse",
            "img":"/assets/img/fat-rascal-thumb.jpg",
            "indice":"un indice",
            "isCorrect":false,
            "questionId":"1586972654356",
            "id":"1586977518898"
          },
          {
            "value":"Une autre reponse encore",
            "img":"/assets/img/cheesecake-thumb.jpg",
            "indice":"un autre indice",
            "isCorrect":false,
            "questionId":"1586972654356",
            "id":"1586977546375"
          }
        ]
      },
      {
        "label":"Quelle age avait il ",
        "img":"/assets/img/detail-small-6.jpg",
        "date":"Wed Apr 15 2020",
        "quizId":"1586222386684",
        "id":"1586972654356",
        "answers":[
          {
            "value":"39",
            "img":"",
            "indice":"un indice ",
            "isCorrect":false,
            "questionId":"1586972654356",
            "id":"1586972688439"
          },
          {
            "value":"49",
            "img":"",
            "indice":"Tata tata",
            "isCorrect":true,
            "questionId":"1586972654356",
            "id":"1586972721708"
          },
          {
            "value":"41",
            "img":"/assets/img/fat-rascal-thumb.jpg",
            "indice":"un indice",
            "isCorrect":false,
            "questionId":"1586972654356",
            "id":"1586977518898"
          },
          {
            "value":"42",
            "img":"",
            "indice":"un autre indice",
            "isCorrect":false,
            "questionId":"1586972654356",
            "id":"1586977546375"
          }
        ]
      }
    ]
  },
];
