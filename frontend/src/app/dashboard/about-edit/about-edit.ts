import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AboutServices } from '../../core/services/about-services';

@Component({
  selector: 'app-about-edit',
  imports: [ReactiveFormsModule ,CommonModule ],
templateUrl: './about-edit.html',
  styleUrl: './about-edit.css'
})
export class AboutEdit implements OnInit{
  constructor(private aboutservice:AboutServices){}
  ngOnInit(): void {
      this.aboutform= new FormGroup(
        {
          name:new FormControl('rahma Korish'),
          role:new FormControl('',[Validators.required]),
          aboutText:new FormControl('',[Validators.required])
          }
      )

        this.aboutservice.getAboutData().subscribe(data => {
          this.aboutform.patchValue({role:data[0].role,aboutText:data[0].aboutText})
  })
}
  
  aboutform!:FormGroup
  submitForm(){
  this.aboutservice.editAbout(this.aboutform.value).subscribe(data=>{
    console.log(data);
  
  })
  
  }

}
