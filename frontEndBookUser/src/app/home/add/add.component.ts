import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  contact = {
    name: '',
    lastname: '',
    email: '',
    adress: '',
    tel:''
  }

  image: any;
  userData: any;

  select(e: any) {
    this.image = e.target.files[0];

  }
  constructor( private _user:UserService , private _contact:ContactService , private router:Router) { }

  ngOnInit(): void {
    this.userData = this._user.getUserDataFromToken();
  }

  add() {
    
    let fd = new FormData;
    fd.append('name', this.contact.name);
    fd.append('email', this.contact.email);
    fd.append('tel', this.contact.tel);
    fd.append('adress', this.contact.adress);
    fd.append('image', this.image);
    fd.append('idUser', this.userData._id);

    this._contact.create(fd)
      .subscribe(
        {
          next: (res) => {
              Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
              })
            
            this.router.navigate(['/home/list']);
            
          },
            error: (err) => {
            console.log(err);
          }
        
      }
    )
  }

}
