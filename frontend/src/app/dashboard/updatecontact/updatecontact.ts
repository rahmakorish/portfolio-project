import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactServices } from '../../core/services/contact-services';

@Component({
  selector: 'app-updatecontact',
  imports: [ReactiveFormsModule],
templateUrl: './updatecontact.html',
  styleUrl: './updatecontact.css'
})
export class Updatecontact implements OnInit{
  constructor(private contactservice:ContactServices){}
  ngOnInit(): void {
    this.contactform = new FormGroup(
      {
      email:new FormControl(''),
      phone:new FormControl(''),
      Github:new FormControl(''),
      linkedin:new FormControl(''),
      }
    )
    //get data on initiation of page and subscribe to it
    this.contactservice.getContactData().subscribe(data=>{
    this.contactform.patchValue({email:data[0].email, phone:data[0].phone, Github:data[0].Github, linkedin:data[0].linkedin})
    })
  }
  contactform!:FormGroup
  //send updated data on form submission
  submitform(){
this.contactservice.updateContactData(this.contactform.value).subscribe(data=>{
    console.log(data);
  
  })
  }

}
