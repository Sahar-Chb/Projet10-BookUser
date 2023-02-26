import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://127.0.0.1:3000/user/';

  constructor(private http: HttpClient , private router:Router) {
    
  }
  
  register(user: any) {
    return this.http.post(this.url + 'register', user);
  }

  login(user: any) {
    return this.http.post(this.url + 'login', user);
  }

  isLoggedIn() {

    let myToken = localStorage.getItem('token');
    if (myToken) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  getUserDataFromToken() {
    let token = localStorage.getItem('token');
    if (token) {

      // frhoirefihrfih.eiofheifohirejiejpire.nfewnewoifewonfoewinfoirewhihroe 3 parties
      // approche1
      // let cryptedData = token.split('.')[1];
      // let data = window.atob(cryptedData);
      // let objectData = JSON.parse(data);
      // console.log(objectData);
      
      // approche2
      let data = JSON.parse(window.atob(token.split('.')[1]));
      return data;
      
    }
  }
}
