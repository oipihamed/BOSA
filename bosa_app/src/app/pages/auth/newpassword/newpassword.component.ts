import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { UserResponse } from 'app/shared/components/models/user.interface';
import { BaseForm } from 'app/shared/utils/base-form';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  hide = true;
  newPasswordForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(5), PasswordValidator.cannotContainSpace, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{5,}$")]],
    confirmPassword: ['', [Validators.required, Validators.minLength(5), PasswordValidator.cannotContainSpace]],
    restore: ['', [Validators.required]],
  }, { asyncValidator: PasswordValidator.checkPasswords('password', 'confirmPassword') });

  restore: any[] = [];

  constructor(
    public baseForm: BaseForm,
    private authSvc: AuthService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
    private ruta: ActivatedRoute,
  ) {
    this.ruta.params.subscribe(params => {
      this.restore = params['restore'];
      this.newPasswordForm.controls['restore'].setValue(this.restore);
    })
  }

  ngOnInit(): void {
  }


  onNewPassword() {
    //Se verifica que el formulario sea correcto
    if (this.newPasswordForm.invalid) return;
    //Obtener los datos del formulario
    const form = this.newPasswordForm.value;

    this.authSvc.newPassword(form)
      .subscribe((user: UserResponse | void) => {
        console.log(user);
        this.spinner.hide();
        this.snackBar.open('La contraseña cambio', '', {
          duration: 5 * 1000,
          panelClass: ['success-snackbar'],
          horizontalPosition: 'right',
          verticalPosition: 'top'
        })
      });
  }

  getErrorMessage(field: string) {
    let message = '';
    var form = this.newPasswordForm.get(field);
    if (form != null) {
      if (form.hasError("required")) {
        message = "Campo requerido";
      } else if (form.hasError("password")) {
        message = "Se requiere de una contraseña";
      } else if (form.hasError("cannotContainSpace")) {
        message = "El nombre de usuario no puede contener espacios";
      } else if (form.hasError("notSame")) {
        message = "La contraseña no coincide"
      } else if ("pattern") {
        message = "La contraseña 5 caracteres entre los que debe incluir \n una letra mayuscula, minuscula y un caracter especial"
      }
    }
    return message;
  }

  isValidField(field: string) {
    var form = this.newPasswordForm.get(field);
    var flag = false;
    if (form != null) {
      flag = form.touched || form.dirty && !form.valid
    }
    return flag;
  }

}

export class PasswordValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { required: true }
    }
    return null;
  }

  static checkPasswords(controlName: string, matchingControlName: string): ValidationErrors | null {
    return async (formGroup: FormGroup) => {

      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ notSame: true });
      } else {
        matchingControl.setErrors(null);
      }

    }
  }
}
