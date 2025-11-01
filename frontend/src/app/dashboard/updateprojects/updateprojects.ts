import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProjectServices } from '../../core/services/project-services';

@Component({
  selector: 'app-updateprojects',
  imports: [ReactiveFormsModule, CommonModule],
templateUrl: './updateprojects.html',
  styleUrl: './updateprojects.css'
})
export class Updateprojects implements OnInit {
  Projectservice = inject(ProjectServices)
  constructor(private cdr:ChangeDetectorRef){}
  createproject!:FormGroup;
  ngOnInit(){
    this.createproject = new FormGroup({
    newprojectname: new FormControl(''),
    newprojectdesc: new FormControl(''),
    newgithubLink: new FormControl(''),
    newprojectdeployment: new FormControl('')
    }) 
}
    addproject(){
      this.Projectservice.addnewProject({
        name: this.createproject.value.newprojectname,
  description: this.createproject.value.newprojectdesc,
  githubLink: this.createproject.value.newgithubLink,
  deployment: this.createproject.value.newprojectdeployment}).subscribe(data=>{
        console.log(data);
        
      })
          this.cdr.detectChanges()

    }
    
}


