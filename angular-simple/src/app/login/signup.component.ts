import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  form = {
    firstName: '',
    lastName: '',
    loginId: '',
    password: '',
    dob: '',
  }

  constructor(private httpService: HttpServiceService) {

  }

  signUp() {
    this.httpService.post('http://localhost:8080/Auth/signUp', this.form, function (res: any) {
      console.log('data => ', res);
    })
  }
}