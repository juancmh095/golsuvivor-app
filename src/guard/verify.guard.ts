
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class VerifyGuard implements CanActivate {

constructor(private router: Router) {}

canActivate(): boolean {
    // Check if the user is logged in
    var email = localStorage.getItem('email');
    if (email && email != 'undefined' && email != '') {
      return true;
    } else {
      localStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
