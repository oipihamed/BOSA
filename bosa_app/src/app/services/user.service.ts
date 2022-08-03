import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User, UserResponse, UserSignUp } from 'app/shared/components/models/user.interface';
import { environment } from 'environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  signUpUser(userData: any): Observable<UserResponse | void> {
    return  this.http.post<UserResponse>(`${ environment.API_URL }/user`, userData)
      .pipe(map((user:UserResponse) => {
        if(user.code==0){
        this.snackBar.open(user.message, '',  {
          duration: 5 * 1000,
          panelClass: ['success-snackbar'],
          horizontalPosition: 'right',
          verticalPosition: 'top'
          })
          this.router.navigate(['login']);
        return user;
      }else{
        return user;         
        }
      }),
      catchError((error) => this.handlerError(error)));
  }

  getUsuarioList() {
    return this.http.get(`${ environment.API_URL }/user/`);
  } 

  getUsuarioById(idUsuario: number) {
    return this.http.get(`${ environment.API_URL }/user/${idUsuario}`);
  }

  deleteUsuario(idUsuario: number){
    return this.http.delete(`${ environment.API_URL }/user/${idUsuario}`);
  }

/*  saveUsuario(usuario: UserSignUp){
    return this.http.post(`${ environment.API_URL }/user/`, usuario);
  }


  updateUsuario(idUsuario: number, usuario: UserSignUp): Observable<any> {
    return this.http.put(`${ environment.API_URL  }/user/${idUsuario}`, usuario);
  }
*/
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
