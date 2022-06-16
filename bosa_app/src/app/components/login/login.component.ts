import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }

  ngOnInit(): void {
  }

}
