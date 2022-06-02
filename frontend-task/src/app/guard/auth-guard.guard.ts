import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  token: any
  user: any;
  roll: any
  flag: string | undefined
  constructor(private _route: Router,) {
    this.token = window.sessionStorage.getItem('token')
    this.user = localStorage.getItem('user')
    console.log(this.token, "ok");

  };


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // var isAuthenticated = true//this.authService.authenticate()
    if (!this.token) {
      this._route.navigate(['/login']);
    }
    return true;
  }

}
