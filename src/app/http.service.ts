import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // dla uproszczenia działania aplikacji UserService będzie przechowywać dane o zalogowanym użytkowniku
  isLogin: boolean = false;
  loginUserData: User;

  constructor(private http: HttpClient) { }

  testLogin() {
    return this.http.get("api/api/login-test");
  }

  login(user: User) {
    return this.http.post("api/api/login", user);
  }

  logout() {
    return this.http.get("api/api/logout");
  }

  register(user: User) {
    return this.http.post("api/api/register", user);
  }

  getUsers() {
    return this.http.get("api/api/users");
  }

  getMessages(id: number) {
    return this.http.get(`api/api/messages/${id}`);
  }

  /* sendMessages(mes: Message) {
    return this.http.post('api/api/messages/', mes);
  } */

  setUser(user: User) {
    this.loginUserData = user;
  }  
}
