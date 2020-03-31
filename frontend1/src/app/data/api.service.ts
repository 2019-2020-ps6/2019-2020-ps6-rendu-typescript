import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QUIZZES } from './productsstat';
import {serverUrl} from '../../configs/server.config';
import {Quiz} from '../../models/quiz.model';


export interface IQuiz {
  id: number;
  name: string;
  img: string;
  theme: string;
  themeColor: string;
  description: string;
  date: string;
}

export interface IQuizResponse {
  data: IQuiz[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
   private quizUrl = serverUrl + '/quizzes';
   // private data: IProduct[] = PRODUCTS;
   // private iProductResponse: IProductResponse;

  constructor(private http: HttpClient) { }

  getQuizzes(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.apiUrl + '/cakes/paging';

    let params = new HttpParams();
    params = params.append('pageSize', pageSize + '');
    params = params.append('currentPage', currentPage + '');
    params = params.append('search', search);
    params = params.append('orderBy', orderBy);

    /* return this.http.get(quizUrl, { params })
      .pipe(
        map((res: IQuizResponse) => {
           res.data = this.setQuizzesFromUrl();
           console.log(res);
           return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );*/
  }

  getQuizzes1(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = serverUrl + '/quizzes';

    let params = new HttpParams();
    params = params.append('pageSize', pageSize + '');
    params = params.append('currentPage', currentPage + '');
    params = params.append('search', search);
    params = params.append('orderBy', orderBy);

    return this.http.get(url)
      .pipe(
        map((res) => {
           console.log(res);
           return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  /* setQuizzesFromUrl(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    return this.http.get<Quiz[]>(this.quizUrl).subscribe((quizList) => {
      return quizList;
      // this.quizzes$.next(this.quizzes);
    });
  }*/
}
