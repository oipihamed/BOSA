import { Component, OnInit, ViewChild } from '@angular/core';
import{User} from '../../interface/User'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('name') inputName: any; 
  @ViewChild('lastname') inputLastName: any; 
  @ViewChild('username') inputUserName: any; 
  @ViewChild('email') inputEmail: any; 
  @ViewChild('password') inputPassword: any; 
  @ViewChild('rPassword') inputRPassword: any; 
  @ViewChild('street') inputStreet: any; 
  @ViewChild('district') inputDistrict: any; 
  
  @ViewChild('city') inputCity: any; 
  @ViewChild('state') inputState: any; 
  @ViewChild('zipcode') inputZipCode: any; 
  @ViewChild('phone') inputPhone: any; 
  constructor() { }

  signUp(name: HTMLInputElement,lastname:HTMLInputElement,
    username:HTMLInputElement,email:HTMLInputElement,password:HTMLInputElement,rPassword:HTMLInputElement,
    ) {
    console.log(username.value);
    console.log(password.value);
    return false;
  }
limpiarCampos(){
  this.inputName.nativeElement.value='';
  this.inputEmail.nativeElement.value='';
  this.inputLastName.nativeElement.value='';
  this.inputUserName.nativeElement.value='';
  this.inputPassword.nativeElement.value='';
  this.inputRPassword.nativeElement.value='';
  this.inputStreet.nativeElement.value='';
  this.inputDistrict.nativeElement.value='';
  this.inputCity.nativeElement.value='';
  this.inputState.nativeElement.value='';
  this.inputZipCode.nativeElement.value='';
  this.inputPhone.nativeElement.value='';
}
  ngOnInit(): void {
  }

}
