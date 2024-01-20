import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  form = {
    firstName: '',
    lastName: '',
    loginId: '',
    password: '',
    dob: '',
  }

  constructor(private httpService: HttpServiceService) {

  }

  save() {
    this.httpService.post('http://localhost:8080/User/save', this.form, function (res: any) {
      console.log('data => ', res);
    })
  }



}
