import { Component ,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  nameUser!:string
  emailUser!:string
  messageUser!:string
  websiteUser!:string
  ngOnInit(): void {
    
  }
  // fonction de contact 
  oncontact(form:NgForm){
    console.log(form.value)
    form.resetForm()
  }

}
