import { CommonModule } from '@angular/common';
import { Component, inject, OnInit,  ChangeDetectorRef } from '@angular/core';
import { AboutServices } from '../../core/services/about-services';
import { IUserData } from '../../core/models/about.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit{
  
  aboutService = inject(AboutServices)
  about!:IUserData;
  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.aboutService.getAboutData().subscribe(data=>{
      
  this.about = data[0]
    console.log(this.about);
    this.cdr.detectChanges();
  })
  
  }
}
