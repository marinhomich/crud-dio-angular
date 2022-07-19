import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/e7987535-74bd-4276-8b96-2117039c2821'

  constructor(private httpClient:HttpClient) { }

  // CREATE

  // READ
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  // UPDATE

  // DELETE
}
