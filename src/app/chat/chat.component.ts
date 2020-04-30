import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {

  constructor(
    private router: Router,
    private httpService: HttpService
  ) {
    // Sprawdzenie, czy użytkownik nie jest zalogowany; jeżeli tak - przejście do głównego panelu
    if (httpService.isLogin === true) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    console.log("loginUserData - user_id: " + this.httpService.loginUserData.user_id);
    console.log("loginUserData - user_name: " + this.httpService.loginUserData.user_name);
    console.log("loginUserData - user_password: " + this.httpService.loginUserData.user_password);
  }

  logout(): void {
    this.httpService.logout();
    this.router.navigate(['/login']);
  }

}
