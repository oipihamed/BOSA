import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
loginForm=this.fb.group({
  username:['',[Validators.required, UsernameValidator.cannotContainSpace]],
  password:['',[Validators.required,Validators.minLength(5)]]
});
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

onLogin(){
  //Se verifica que el formulario sea correcto
  if(this.loginForm.invalid)return;  
  //Obtener los datos del formulario
  const form=this.loginForm.value;
  console.log(form);
}

getErrorMessage(field:string){
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
}
}

export class UsernameValidator {  
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {  
      if((control.value as string).indexOf(' ') >= 0){  
          return {cannotContainSpace: true}  
      }  
  
      return null;  
  }
}