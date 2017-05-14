import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email='nguyentienviet';
  password='123456';
  constructor() { }

  ngOnInit() {
  }

}
