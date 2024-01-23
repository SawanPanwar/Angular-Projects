import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html'
})
export class UserlistComponent implements OnInit {

  form: any = {
    list: [],
    searchParams :{}
  }

  constructor(private httpService: HttpServiceService, private router: Router) {

  }

  ngOnInit(): void {

    this.search();

  }

  search() {
    var self = this;
    this.httpService.post('http://localhost:8080/User/search', this.form.searchParams, function (res: any) {
      self.form.list = res.result.data;
    })
  }

  edit(page:any) {
    this.router.navigateByUrl(page);
  }
}
