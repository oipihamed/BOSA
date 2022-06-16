import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'Omar'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
