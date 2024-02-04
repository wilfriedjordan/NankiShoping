import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router) { }
  ngOnInit(): void {

  }
  login(){
    this.router.navigateByUrl('/login')
  }
}
