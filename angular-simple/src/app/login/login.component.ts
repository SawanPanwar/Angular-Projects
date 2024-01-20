import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

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
  inputerror: any = {};

  constructor(private router: Router, private httpService: HttpServiceService) {
  }

  signIn() {
    var self = this;
    this.httpService.post('http://localhost:8080/Auth/login', this.form, function (res: any) {
      if (res.result.inputerror) {
        self.inputerror = res.result.inputerror;
      }
      if (res.result.message) {
        self.form.message = res.result.message;
      }
      if(res.success){
        localStorage.setItem('fname', res.result.data.firstName);
        localStorage.setItem('lname', res.result.data.lastName);
      }
    })
  }

}
