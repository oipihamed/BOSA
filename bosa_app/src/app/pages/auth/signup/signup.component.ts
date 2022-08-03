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
    name: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
    lastName: ['', [Validators.required, Validators.minLength(1),Validators.maxLength(20)]],
    username: ['', [Validators.required,Validators.maxLength(20),UsernameValidator.cannotContainSpace]],
    password: ['', [Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{5,}$"),Validators.maxLength(16),UsernameValidator.cannotContainSpace]],
    confirmPassword: ['', [Validators.required,Validators.maxLength(16)]],
    email: ['', [Validators.required, Validators.email,Validators.maxLength(40)]],
    street: ['', [Validators.required]],
    district: ['', [Validators.required]],
    state: ['', [Validators.required]],
    city: ['', [Validators.required,Validators.maxLength(20),Validators.minLength(1)]],
    zipcode: ['', [Validators.required,Validators.min(0)]],
    phone: ['', [Validators.required,Validators.min(11)]]
  }, {validator: this.checkIfMatchingPassword("password", "confirmPassword")// asyncValidator: UsernameValidator.checkPasswords('password', 'confirmPassword')
 });

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
        message = "No tiene el minimo de caracteres necesario";
      }else if (form.hasError("maxlength")) {
        message = "Mas de los caracteres permitidos";
      }  else if (form.hasError("cannotContainSpace")) {
        message = "Este campo no puede contener espacios";
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
  checkIfMatchingPassword(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordConfirmationKey];

      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notSame: true})
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }

}

export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    console.log(control.value)
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true }
    }

    return null;
  }
  static checkPasswords(controlName: string, matchingControlName: string): ValidationErrors | null {
    return  async (formGroup: FormGroup) => {

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
