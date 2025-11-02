import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactServices } from '../../core/services/contact-services';
import { IContact } from '../../core/models/contact.model';

@Component({
    selector: 'app-updatecontact',
    imports: [ReactiveFormsModule],
    templateUrl: './updatecontact.html',
    styleUrl: './updatecontact.css'
})
export class Updatecontact implements OnInit {
contactservice = inject(ContactServices)
contactData!:IContact;
constructor(private cdr: ChangeDetectorRef){}
ngOnInit(): void {    
this.contactservice.getContactData().subscribe(data=>{  
this.contactData = data[0]
    console.log(this.contactData);

    this.cdr.detectChanges();
    })}

}
