import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import{CanActivate  , ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    const token = this.authService.getToken();
    if(token){
      return true;
    }else{
      this.router.navigateByUrl('/login')
      return false;
    }
  }
}
