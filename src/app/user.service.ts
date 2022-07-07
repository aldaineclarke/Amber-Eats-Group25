import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './interfaces/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

   private userEndpoint = `http://localhost:3000/users`

   saveUser(data:any):Observable<User[]>{ 
    return this.http.post<User[]>(this.userEndpoint,data)
}

   updateUser(data:any, id:number ):Observable<User> {
    return this.http.put<User>(this.userEndpoint+"/"+id, data);
}

    getUser(id:number): Observable<User[]>{
    return this.http.get<User[]>(this.userEndpoint + '/' + id);
}

getAllUsers(): Observable<User[]>{
  return this.http.get<User[]>(this.userEndpoint);
}
}

