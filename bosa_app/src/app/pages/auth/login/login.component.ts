import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserResponse } from 'app/shared/components/models/user.interface';
import { AuthService } from '../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RecoveryComponent } from '../recovery/recovery.component';
import { BaseForm } from 'app/shared/utils/base-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  hide = true;
  loginForm = this.fb.group({
    username: ['', [Validators.required, UsernameValidator.cannotContainSpace]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    public baseForm: BaseForm
  ) { }

  ngOnInit(): void {
  }

  forgotPasswordAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px"
    dialogConfig.height = "400px"
    this.dialog.open(RecoveryComponent, dialogConfig);
  }

  onLogin() {

    //Se verifica que el formulario sea correcto
    if (this.loginForm.invalid) return;

    //Obtener los datos del formulario
    const formValue = this.loginForm.value;

    this.authSvc.login(formValue)
      .subscribe((user: UserResponse | void) => {
        console.log(user);
        this.spinner.hide();
      });
  }

  /*getErrorMessage(field:string){
   let message='';
   var form=this.loginForm.get(field);
   if(form!=null){
    if(form.hasError("required")){
      message="Campo requerido";
    }else if(form.hasError("minlength")){
      message="El minimo de caracteres son 5";
    } else if (form.hasError("cannotContainSpace")){
      message="El nombre de usuario no puede contener espacios";
    }
   }
   return message; 
  }
  
  isValidField(field: string){
  var form=this.loginForm.get(field);
  var flag=false;
  if(form!=null){
  flag=form.touched || form.dirty && !form.valid
  }
  return flag;
  }*/
}

export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { required: true }
    }

    return null;
  }
}

