import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  serverErrors: String[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpService: HttpService
  ) {
    // Sprawdzenie, czy użytkownik nie jest zalogowany; jeżeli tak - przejście do głównego panelu
    if (httpService.isLogin) {
        this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    // Tworzenie grupy pól formularza
    this.loginForm = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.minLength(3)]],
      user_password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  // Getter zwracający pola formularza
  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.serverErrors = [];

    // Sprawdzenie poprawności danych w formularzu
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    
    // Stworzenie obiektu użytkownika z danych formularza i przesłanie ich do serwera
    this.httpService.login(new User(0, this.loginForm.controls.user_name.value, this.loginForm.controls.user_password.value))
    // Subskrybcja do strumienia danych zwrotnych z zapytania http
      .subscribe(
        data => {
          if ("login" in data) {
            if (data["login"] === true) {
              // przejście do strony logowania
              this.router.navigate(['/login']);
            } else {
              this.loading = false;
              this.serverErrors.push(JSON.stringify(data));
              console.log("LoginComponent, onSubmit:", data);
            }
          } else {
            this.loading = false;
            this.serverErrors.push(JSON.stringify(data));
            console.log("LoginComponent, onSubmit:", data);
          }

        },
        error => {
          this.loading = false;
        });

  }
}
