import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, of, Subject} from 'rxjs';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import {Score, User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private users: User[];

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public users$: BehaviorSubject<User[]>
    = new BehaviorSubject(this.users);

  public userSelected$: Subject<User> = new Subject();

  private usersUrl = serverUrl + '/users';

  private scoresPath = '/scores';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.setUsersFromUrl();
  }

  setUsersFromUrl() {
    this.http.get<User[]>(this.usersUrl).subscribe((userList) => {
      this.users = userList;
      this.users$.next(this.users);
    });

  }
  addUser(user: User) {
    this.http.post<User>(this.usersUrl, user, this.httpOptions).subscribe(() => this.setUsersFromUrl());
  }

  deleteUser(user: User) {
    const urlWithId = this.usersUrl + '/' + user.id;
    this.http.delete<User>(urlWithId, this.httpOptions).subscribe(() => this.setUsersFromUrl());
  }

  setSelectedUser(userId: string) {
    const urlWithId = this.usersUrl + '/' + userId;
    this.http.get<User>(urlWithId).subscribe((user) => {
      this.userSelected$.next(user);
    });
  }

  addScore(user: User, score: Score) {
    const scoreUrl = this.usersUrl + '/' + user.id + this.scoresPath;
    this.http.post<Score>(scoreUrl, score, this.httpOptions).subscribe(() => this.setSelectedUser(user.id));
  }

}
