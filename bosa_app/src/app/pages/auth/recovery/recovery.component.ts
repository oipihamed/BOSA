import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserResponse } from 'app/shared/components/models/user.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  recoveryForm = this.fb.group({
    username: ['', [Validators.required, Validators.email, EmailValidator.cannotContainSpace]]
  })

  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private spinner: NgxSpinnerService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  onRecovery() {
    //Se verifica que el formulario sea correcto
    if (this.recoveryForm.invalid) return;
    //Obtener los datos del formulario
    const form = this.recoveryForm.value;
    let dialogRef = this.matDialog.open(RecoveryComponent);


    this.authSvc.recovery(form)
      .subscribe((user: UserResponse | void) => {
        console.log(user);
        this.spinner.hide();
        this.snackBar.open('Correo Electronico Enviado', '', {
          duration: 5 * 1000,
          panelClass: ['success-snackbar'],
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        dialogRef.close();
      });
  }

  getErrorMessage(field: string) {
    let message = '';
    var form = this.recoveryForm.get(field);
    if (form != null) {
      if (form.hasError("required")) {
        message = "Campo requerido";
      } else if (form.hasError("email")) {
        message = "Se requiere de un email";
      } else if (form.hasError("cannotContainSpace")) {
        message = "El nombre de usuario no puede contener espacios";
      }
    }
    return message;
  }

  isValidField(field: string) {
    var form = this.recoveryForm.get(field);
    var flag = false;
    if (form != null) {
      flag = form.touched || form.dirty && !form.valid
    }
    return flag;
  }
}

export class EmailValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { required: true }
    }

    return null;
  }
}
