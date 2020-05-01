import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { User } from '../user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {

    // lista użytkowników
    users: User[] = [];
    messagesToUser: Message[] = [];
  
    selectedUser: User = null;

  constructor(
    private router: Router,
    private httpService: HttpService
  ) {
    // Sprawdzenie, czy użytkownik nie jest zalogowany; jeżeli nie - przejście do panelu logowania
    if (!httpService.isLogin) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.reloadUsers();
  }

  getMyId() {
    return this.httpService.loginUserData.user_id;
  }

  sendMessage(e) {

    this.httpService.sendMessages(new Message(0, 0, this.selectedUser.user_id, e, null)).subscribe(
      data => {
        console.log("ChatComponent, onSubmit:", data);
      },
      error => {
      });
  }

  logout(): void {
    this.httpService.isLogin = false;
    this.httpService.logout();
    this.router.navigate(['/login']);
  }

  reloadUsers() {
    this.httpService.getUsers().subscribe(
      data => {
        if ("data" in data) {
          console.log("data");
          if (Array.isArray(data["data"])) {
            this.users = data["data"] as User[];
          }
        }
      },
      error => {
      });
  }

    // funkcja wywoływana jak zostanie naciśniety użytkownik na liście użytkowników
    userSelected(user: User) {
      this.selectedUser = user;
      console.log("Selected user", this.selectedUser)
      this.getMessagesWithSelectedUser();
    }
  
    getMessagesWithSelectedUser() {
      // uzupełnij funkcję na podstawie funkcji realoadUsers
  
    }

}
