import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  emailUser!: string;
  passwordUser!: string;
  constructor(private authService:AuthService, private router:Router){}
  login(form:NgForm){
    console.log(form.value)
    this.authService.login();
    this.router.navigateByUrl('/');
  }

}
