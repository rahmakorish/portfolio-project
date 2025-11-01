import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ContactServices } from '../../core/services/contact-services';
import { CommonModule } from '@angular/common';
import { IContact } from '../../core/models/contact.model';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact implements OnInit {
contactservice = inject(ContactServices)
contactData!:IContact;
constructor(private cdr: ChangeDetectorRef){}
ngOnInit(): void {    
  this.contactservice.getContactData().subscribe(data=>{  
  this.contactData = data[0]
    console.log(this.contactData);

    this.cdr.detectChanges();
  })}}


