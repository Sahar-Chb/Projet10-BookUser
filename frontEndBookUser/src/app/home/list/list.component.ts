import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  user: any;
  contacts: any;


  constructor( private _user:UserService , private _contact:ContactService) { }

  ngOnInit(): void {
    this.user = this._user.getUserDataFromToken();

    this._contact.getByIdUser(this.user._id)
      .subscribe(
        {
          next: (res) => {
            this.contacts = res;
            
          },
          error: (err) => {
            console.log(err);
            
          }
      }
    )

  }

  delete(id: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'

    })
      .then((result) => {
      if (result.isConfirmed) {
      
        this._contact.delete(id)
          .subscribe(
            {
                next: (res) => {
                this.ngOnInit();
                
            },
          error: (err) => {
            console.log(err);
            
          }
          })}
})}}

