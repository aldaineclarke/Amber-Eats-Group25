import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users';
import { map, tap, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable, pipe } from 'rxjs';

const AUTH_DATA = 'user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private subject = new BehaviorSubject<User | null>(null);
  private userEndpoint = `http://localhost:3000/users`;
  user$: Observable<User | null> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));

    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }


  saveUser(data: any): Observable<User> {
    return this.http.post<User>(this.userEndpoint, data);
  }

  updateUser(data: any, id: number): Observable<User> {
    return this.http.patch<User>(this.userEndpoint + '/' + id, data);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.userEndpoint + '/' + id);
  }
  findEmail(email: string): Observable<User | boolean> {
    return this.getAllUsers().pipe(
      map((users: User[]) => {
        const emailCheck = users?.filter((user) => user.email === email);
        return emailCheck.length === 0 ? false : emailCheck[0];
      })
    );
  }
  
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userEndpoint);
  }

  login(credentials: User): Observable<User> {
    return this.http.post<User>(this.userEndpoint, credentials).pipe(
      tap((user) => {
        this.subject.next(user);
        localStorage.setItem(AUTH_DATA, JSON.stringify(user));
      }),
      shareReplay()
    );
  }

  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
  }
}
