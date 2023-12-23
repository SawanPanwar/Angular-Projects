import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'url';
import { HttpServiceService } from '../http-service.service';
import { DataValidator } from '../utility/data-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpServiceService, private dataValidator: DataValidator) { }

  ngOnInit() {
  }

  form = {
    error: false,
    loginId: '',
    password: '',
    message: ''
  };
  inputerror = {};
  message = '';

  signIn() {
    var self = this;
    this.httpService.post('http://localhost:8080/Auth/login', this.form, function (res) {

      self.form.message = '';
      self.inputerror = {};
      self.form.error = !res.success;

      if (self.dataValidator.isNotNullObject(res.result.inputerror)) {
        self.inputerror = res.result.inputerror;
      }
      if (self.dataValidator.isNotNullObject(res.result.message)) {
        self.form.message = res.result.message;
      }
      if (res.success) {
        localStorage.setItem("fname", res.result.data.firstName);
        localStorage.setItem("role", res.result.data.roleName);
        self.router.navigateByUrl('/dashboard');
      }
    })
  }

  signUp() {
    this.router.navigateByUrl('/signup');
  }

}
