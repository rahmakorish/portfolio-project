import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SkillsServices } from '../../core/services/skills-services';

@Component({
  selector: 'app-updateskills',
  imports: [ReactiveFormsModule],
  templateUrl: './updateskills.html',
  styleUrl: './updateskills.css'
})
export class Updateskills implements OnInit {
  //inject / change detector / formGroup
  skillsService = inject(SkillsServices)
  constructor(private cdr:ChangeDetectorRef){}

ngOnInit(){
// this.skillsform= new FormGroup({
//   skill: new FormControl(''),
//   skillDetails: new FormControl('')
// })

this.createForm= new FormGroup({
  newskill: new FormControl(''),
  newskillDetails: new FormControl('')

})
// this.skillsService.getSkillsData().subscribe(data=>{
// this.skillsform.patchValue({skill:data[0].skill, skillDetails:data[0].skillDetails})
// }
// );

  }
  // skillsform!:FormGroup;
  // submitform(){
  //   this.skillsService.updateSkills({
  //   skill:this.skillsform.value.skill,
  //   skillDetails:this.skillsform.value.SkillDetails
  // }).subscribe(data=>{
  //     console.log(data);
  //   })}
createForm!:FormGroup;
createSkill(){}
// createSkill(){
//   this.skillsService.addSkills({
//     skill:this.createForm.value.newskill,
//     skillDetails:this.createForm.value.newskillDetails
//   }).subscribe(data=>{
//       console.log(data);
//     })
//         this.cdr.detectChanges();

// }

}
