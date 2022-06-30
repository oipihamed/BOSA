import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { User } from 'app/interface/User';
import { UserResponse } from 'app/shared/components/models/user.interface';
import { environment } from 'environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  login(userData: any): Observable<UserResponse | void> {
    return this.http.post<UserResponse>(`${ environment.API_URL }/auth`, userData)
      .pipe(map((user:UserResponse) => {

        if(user.code === 0){
          this.router.navigate(['home']);
        }

        return user;
      }),
      catchError((error) => this.handlerError(error)));
  }

  logout() {}

  checkToken() {}

  saveLocalStorage(){}

  handlerError(error: any): Observable<never> { 
    let errorMessage = "Ocurrio un error";
    if(error){
      errorMessage = `${ error.error.message }`;
    }

    this.snackBar.open(errorMessage, '',  {
      duration: 5 * 1000,
      panelClass: ['error-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
      })

    return throwError(errorMessage);
  }
}
