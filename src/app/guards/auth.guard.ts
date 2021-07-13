import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public service: AuthService, public router: Router){}
  
  canActivate(): boolean {
    if (this.service.isLoggeedIn()) {
        this.router.parseUrl('/home');
        return false;
    } else {
        return true;
    }
}
}
