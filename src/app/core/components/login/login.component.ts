import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });


  constructor(
    // private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    // private snackBar: SnackbarService
  ) { }

  ngAfterViewInit() {
    // (window as any).initialize();
  }

  login() {
    // this.auth
    //   .login(this.email, this.password)
    //   .then(res => {
    //     this.snackBar.show(`You've successfuly logged in.`, 'OK');
    //     this.router.navigate(['/']);
    //   })
    //   .catch(err => {
    //     this.snackBar.show(err.message, 'OK');
    //   });
  }

  googleLogin() {
    // this.auth
    //   .googleLogin()
    //   .then(res => {
    //     this.snackBar.show(`You've successfuly logged in.`, 'OK');
    //     this.router.navigate(['/']);
    //   })
    //   .catch(err => {
    //     this.snackBar.show(err.message, 'OK');
    //   });
  }
}
