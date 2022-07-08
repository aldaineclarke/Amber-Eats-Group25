import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { User } from './interfaces/users';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private orderEndpoint = `http://localhost:3000/orders`

  constructor(private http: HttpClient,
               private userService: UserService) {}

  getEmail(email: string):Observable<User |boolean>{
    
    return this.userService.getAllUsers()
    .pipe(map((users: User[]) =>{
      const emailCheck = users?.filter(user => user.email === email)
      return (emailCheck.length === 0) ?false :emailCheck[0] ;
    }))

    


  }


}

// getUser(id:number): Observable<User[]>{
//   return this.http.get<User[]>(this.userEndpoint + '/' + id);
