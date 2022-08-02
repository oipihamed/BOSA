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
  
  constructor(private authSvc: AuthService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
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
  }
  onLogout() {
    this.authSvc.logout();
  }

}
