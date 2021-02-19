import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL: string = 'https://my-json-server.typicode.com/carlosngv/Practica1G12/employees/';

  constructor(
    private http: HttpClient,
  ) { }


  getUsers(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }

  deleteUsers(id: any) {
    return this.http.delete<any>(this.baseURL + id);
  }

  
  createUser(user: User) {
    return this.http.post<any>(
      this.baseURL, user
    );
  }
  updateUser(user: User, id) {
    return this.http.put<any>(this.baseURL + id, user);
  }

}
