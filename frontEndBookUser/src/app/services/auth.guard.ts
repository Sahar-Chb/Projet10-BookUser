import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private _user:UserService, private router:Router) {
    
  }
  
  canActivate() {
    if (this._user.isLoggedIn() == true) {
      return true;
    } else {

      this.router.navigate(['/login']);
      return false;
      
    }
    
  }
  
}
