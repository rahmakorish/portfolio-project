import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ContactServices } from '../../core/services/contact-services';
import { CommonModule } from '@angular/common';
import { IContact } from '../../core/models/contact.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact implements OnInit {
    constructor(private contactservice: ContactServices) { }
    ngOnInit(): void {
        this.contactform = new FormGroup(
            {
                email: new FormControl(''),
                name: new FormControl(''),
                message: new FormControl(''),
            }
        )
        //get data on initiation of page and subscribe to it
    //     this.contactservice.getContactData().subscribe(data => {
    // this.contactform.patchValue({ email: data[0].email, name: data[0].name, message: data[0].message})
    //     })
    }
    contactform!: FormGroup
    //send updated data on form submission
    submitform() {
        this.contactservice.updateContactData(this.contactform.value).subscribe(data => {
            console.log(data);

        })
    }
}


