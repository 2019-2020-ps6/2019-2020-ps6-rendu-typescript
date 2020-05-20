import {Component, Input} from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import {User} from "../../../../models/user.model";
import {QuizService} from "../../../../services/quizzes.service";
import {Quiz} from "../../../../models/quiz.model";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})

export class BreadcrumbComponent {

  path = '';
  pathArr: string[] = [];
  currentRoute = '';
  id;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private quizService: QuizService) {
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
    ).subscribe((event) => {
      this.path = this.router.url.slice(1, this.router.url.split('?')[0].length);
      const paramtersLen = Object.keys(event.snapshot.params).length;
      this.pathArr = this.path.split('/').slice(0, this.path.split('/').length - paramtersLen);
      this.currentRoute = this.pathArr[this.pathArr.length - 1];
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('quizId');
  }

  getUrl = (sub: string) => {
    return '/' + this.path.split(sub)[0] + sub;
  }
}
