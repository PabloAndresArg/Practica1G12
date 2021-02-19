import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL: string = 'https://my-json-server.typicode.com/carlosngv/Practica1G12/employees';

  constructor(
    private http: HttpClient,
  ) { }


  getUsers(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }

  deleteUsers(email: string) {
    return this.http.delete<any>(this.baseURL, email);
  }
  

}
