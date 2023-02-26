import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password:''
  }

  constructor( private _user:UserService , private router: Router) { }

  ngOnInit(): void {
  }

  login() {

    this._user.login(this.user)
      .subscribe(
        {
          next: (res) => {
            // nsajel token f localstorage
            let tokenFromBackend :any = res;
            localStorage.setItem('token', tokenFromBackend.myToken);

            // redirect to the next page
            this.router.navigate(['/home']);
            
          },
          error: (err) => {
            console.log(err);
          }
      }
    )

    
  }

}
