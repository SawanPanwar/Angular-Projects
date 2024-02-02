import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    loginId: '',
    password: '',
    message: ''
  }
  inputerror: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpServiceService) {
    console.log('in LoginComponent constructor')
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.form.message = params['errorMessage'] || null;
      console.log('msssssssssgggggggggggg = >', this.form.message)
    });
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
      if (res.success) {
        localStorage.setItem('fname', res.result.data.firstName);
        localStorage.setItem('lname', res.result.data.lastName);
        localStorage.setItem('token', 'Bearer ' + res.result.token);
      }
    })
  }

}
