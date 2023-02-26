import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: any;
  contact: any;

  image: any;

  select(e: any) {
    this.image = e.target.files[0];
  }

  constructor(private _act:ActivatedRoute , private _contact:ContactService , private router:Router) { }

  ngOnInit(): void {

    this.id = this._act.snapshot.paramMap.get('id');

    this._contact.getById(this.id)
      .subscribe(
        {
          next: (res) => {
            this.contact = res;
          },
          error: (err) => {
            console.log(err);
            
          }
      }
    )
  }

  update() {
    
    let fd = new FormData();
    fd.append('name', this.contact.name);
    fd.append('lastname', this.contact.lastname);
    fd.append('email', this.contact.email);
    fd.append('tel', this.contact.tel);
    fd.append('address', this.contact.address);
    fd.append('idUser', this.contact.idUser);

    if (this.image) {
      fd.append('image', this.image);
    } else {
      fd.append('image', this.contact.image);
    }
    
    this._contact.update(this.id, fd)
      .subscribe(
      
        {
          next: (res) => {
            this.router.navigate(['/home/list']);
          },
          error: (err) => {
            console.log(err);
            
          }
        }
    )
  }

}
