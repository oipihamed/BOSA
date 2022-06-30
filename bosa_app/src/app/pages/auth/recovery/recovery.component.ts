import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  recoveryForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, EmailValidator.cannotContainSpace]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onLogin() {
    //Se verifica que el formulario sea correcto
    if (this.recoveryForm.invalid) return;
    //Obtener los datos del formulario
    const form = this.recoveryForm.value;
    console.log(form);
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
      return { cannotContainSpace: true }
    }

    return null;
  }
}
