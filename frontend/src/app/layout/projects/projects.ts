import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ProjectServices } from '../../core/services/project-services';
import { IProject } from './../../core/models/project.model';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,ReactiveFormsModule],
templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects implements OnInit {
//constructor to detect change immediatly
constructor(private cdr: ChangeDetectorRef){}
//get projectservices injection edeny el7o2na bsor3aaaaaa
// constructor(private projectservice:ProjectServices){}
projectservice= inject(ProjectServices)
//get project interface
projectData:IProject[]=[];

  ngOnInit(): void {
    //get data from services & listen on it 
    this.projectservice.getProjectsData().subscribe(data=>{
      this.projectData= data
      // console.log(this.projectData);
      this.cdr.detectChanges();

    })

  
  }

}
