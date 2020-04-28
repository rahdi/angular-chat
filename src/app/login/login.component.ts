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
          this.httpService.testLogin().subscribe(
            (value) => { console.log('Received value: ', value) }, 
            (error) => { console.log('Error!!', error) }, 
            () => { console.log('End of values') }
          )
          if ("loggedin" in data) {
            if (data["loggedin"] === true) {
              // przejście do strony głównej czatu
              this.httpService.isLogin = true;
              this.router.navigate(['/']);
              //this.httpService.setUser = new User( data["user_id"], data["user_name"], "");
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
          console.log("Error with login!", error);
        });

  }

  register(): void {
    this.router.navigate(['/register']);
  }
}
