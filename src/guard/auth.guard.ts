
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

constructor(private router: Router) {}

canActivate(): boolean {
    // Check if the user is logged in
    var token = localStorage.getItem('token');
    console.log("🚀 ~ AuthGuard ~ canActivate ~ token:", token)
    if (token && token != 'undefined' && token != '') {
      return true;
    } else {
      localStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
