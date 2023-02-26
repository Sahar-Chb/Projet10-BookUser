import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    name: '',
    lastname: '',
    email: '',
    password:''
  }
  

  constructor(private _user:UserService , private router:Router) { }

  ngOnInit(): void {
  }


  create() {
    this._user.register(this.user)
      .subscribe(
        {
          next: (_res) => {

            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your account has been created',
              showConfirmButton: false,
              timer: 1500
            })

            this.router.navigate(['/login']);
            
          },
          error: (err) => {
            console.log(err);
            
            
          }
      }
    )
  }
}
