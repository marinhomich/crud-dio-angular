import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/e7987535-74bd-4276-8b96-2117039c2821'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  // CREATE
  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }

  // READ
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  // UPDATE

  // DELETE
}
