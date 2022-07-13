import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'app/services/user.service';
import { UserResponse } from 'app/shared/components/models/user.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { RecoveryComponent } from '../recovery/recovery.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    lastName: ['', [Validators.required, Validators.minLength(1)]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{5,}$")]],
    confirmPassword: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    street: ['', [Validators.required]],
    district: ['', [Validators.required]],
    state: ['', [Validators.required]],
    city: ['', [Validators.required]],
    zipcode: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  }, { asyncValidator: UsernameValidator.checkPasswords('password', 'confirmPassword') });

  constructor(private fb: FormBuilder, private userSvc: UserService, private spinner: NgxSpinnerService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(RecoveryComponent);
  }

  onSignUp(form: { resetForm: () => void; }) {


    //Se verifica que el formulario sea correcto
    if (this.signupForm.invalid) return;

    //Obtener los datos del formulario
    const formValue = this.signupForm.value;

    this.userSvc.signUpUser(formValue)
      .subscribe((user: UserResponse | void) => {
        console.log(user);
        form.resetForm();
        this.spinner.hide();
      });
  }

  getErrorMessage(field: string) {
    let message = '';
    var form = this.signupForm.get(field);
    if (form != null) {
      if (form.hasError("required")) {
        message = "Campo requerido";
      } else if (form.hasError("minlength")) {
        message = "El minimo de caracteres son 5";
      } else if (form.hasError("cannotContainSpace")) {
        message = "El nombre de usuario no puede contener espacios";
      } else if (form.hasError("notSame")) {
        message = "La contraseña no coincide"
      } else if ("pattern") {
        message = "La contraseña 5 caracteres entre los que debe incluir \n una letra mayuscula, minuscula y un caracter especial"
      } else if (form.hasError("email")) {
        message = "Es necesario ingresar un email valido";
      }
    }
    return message;
  }

  isValidField(field: string) {
    var form = this.signupForm.get(field);
    var flag = false;
    if (form != null) {
      flag = form.touched || form.dirty && !form.valid
    }
    return flag;
  }


}

export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true }
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
