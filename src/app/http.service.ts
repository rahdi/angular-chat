import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  isLogin: boolean = false;
  loginUserData: User;

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

  sendMessages(mes: Message) {
    return this.http.post('api/api/messages/', mes);
  }

  set user(user: User) {
    this.loginUserData = user;
  }  
}
