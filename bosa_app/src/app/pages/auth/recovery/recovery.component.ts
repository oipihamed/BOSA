import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
recoveryForm=this.fb.group({
  email:['',[Validators.required,Validators.email]]
})

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

onLogin(){
    //Se verifica que el formulario sea correcto
    if(this.recoveryForm.invalid)return;  
    //Obtener los datos del formulario
    const form=this.recoveryForm.value;
    console.log(form);
  }

getErrorMessage(field:string){
    let message='';
    var form=this.recoveryForm.get(field);
    if(form!=null){
     if(form.hasError("required")){
       message="Campo requerido";
     }else if(form.hasError("email")){
       message="Se requiere de un email";
     }
    }
    return message; 
   }

isValidField(field: string){
    var form=this.recoveryForm.get(field);
    var flag=false;
    if(form!=null){
    flag=form.touched || form.dirty && !form.valid
    }
    return flag;
}

}
