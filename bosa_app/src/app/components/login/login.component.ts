import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../interface/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('email') email: any; 
  @ViewChild('password') password: any; 
  constructor() {}

  login(email: HTMLInputElement, password: HTMLInputElement) {
    console.log(this.email);
    console.log(this.password);
    return false;
  }

  ngOnInit(): void {
  }

  limpiarCampos(){
    this.email.nativeElement.value='';
    this.password.nativeElement.value='';
  }

}
