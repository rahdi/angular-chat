import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.minLength(3)]],
      user_password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  // Getter zwracający pola formularza
  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.serverErrors = [];

    // Sprawdzenie poprawności danych w formularzu
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    // Stworzenie obiektu użytkownika z danych formularza i przesłanie ich do serwera
    this.httpService.register(new User(0, this.registerForm.controls.user_name.value, this.registerForm.controls.user_password.value))
      // Subskrybcja do strumienia danych zwrotnych z zapytania http
      .subscribe(
        data => {
          if ("register" in data) {
            if (data["register"] === true) {
              // przejście do strony logowania
              this.router.navigate(['/login']);
            } else {
              this.loading = false;
              this.serverErrors.push(JSON.stringify(data));
              console.log("RegisterComponent, onSubmit:", data);
            }
          } else {
            this.loading = false;
            this.serverErrors.push(JSON.stringify(data));
            console.log("RegisterComponent, onSubmit:", data);
          }

        },
        error => {
          this.loading = false;
          console.log("Error with register!", error)
        }
      );

  }
}
