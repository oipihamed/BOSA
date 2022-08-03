import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'app/pages/auth/services/auth.service';
import { Subject,takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  private destroy$ = new Subject<any>();
  isLogged = false;
  isAdmin=false;
  constructor(private authSvc: AuthService) { }
  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete;
  }


  ngOnInit(): void {
    this.authSvc.token$
    .pipe(takeUntil(this.destroy$))
    .subscribe( (token: string) => {
      if (token) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    });
    this.authSvc.idRol$
    .pipe(takeUntil(this.destroy$))
    .subscribe( (rol: string) => {
      if (rol==="2") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
  }
  onLogout() {
    this.authSvc.logout();
  }

}
