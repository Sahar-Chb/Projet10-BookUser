import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private _user:UserService) { }

  ngOnInit(): void {
    this.user = this._user.getUserDataFromToken();
  }

  logout() {
    this._user.logout();
  }
}
