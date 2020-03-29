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
    if (httpService.isLogin) {
        this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  logout(): void {
    this.httpService.logout();
    this.router.navigate(['/login']);
  }

}
