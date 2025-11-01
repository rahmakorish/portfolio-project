import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { SkillsServices } from '../../core/services/skills-services';
import { ISkill } from '../../core/models/skillmodel';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  imports: [CommonModule,ReactiveFormsModule],
templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit {
  // injection:
  skillsService= inject(SkillsServices)
  // interface:
  skillData:ISkill[]=[];
  // change detector:
  constructor(private cdr:ChangeDetectorRef){}
  ngOnInit(){
    //get data from box and listen to it
    this.skillsService.getSkillsData().subscribe({
      next:(skills)=>{
        this.skillData = skills
        // console.log(skills);
        console.log(this.skillData);
        this.cdr.detectChanges()
      }
    })
  }

}
