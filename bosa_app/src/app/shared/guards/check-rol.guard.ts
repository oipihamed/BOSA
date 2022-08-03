import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/pages/auth/services/auth.service';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CheckRolGuard implements CanActivate {
  
  constructor(private authSvc: AuthService) {}
  
  canActivate(): Observable<boolean>{
    const result=this.authSvc.idRol$.pipe(
      take(1),
      map(rol => {
        return (rol ==="2"? true : false);
      })
    )
    return result;
  }
  
}
