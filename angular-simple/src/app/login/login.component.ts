import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = {
    loginId: '',
    password: '',
    message: ''
  }

  constructor(private router: Router) {
  }

  signIn() {
    if (this.form.loginId == 'admin' && this.form.password == 'admin') {
      this.router.navigateByUrl('/welcome');
    } else {
      this.form.message = 'Invalid Login ID & password'
    }

  }

}
