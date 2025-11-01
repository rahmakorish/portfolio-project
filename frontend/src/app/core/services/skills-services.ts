import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISkill } from '../models/skillmodel';

@Injectable({
  providedIn: 'root'
})
export class SkillsServices {
  //create channel
  constructor(private http:HttpClient){}
  //box that contain data to be observed
  skillsAPI='http://localhost:3000/skills/'
  //get data from client
  getSkillsData():Observable<ISkill[]>{
    return this.http.get<ISkill[]>(this.skillsAPI)
  }
  //add new skills for update form
  updateSkills(updatedskillsData:ISkill):Observable<ISkill>{
    return this.http.put<ISkill>(this.skillsAPI,updatedskillsData)
  }
  //add new skill
  addSkills(newskillsData:ISkill):Observable<ISkill>{
    return this.http.post<ISkill>(this.skillsAPI,newskillsData)
  }
  //get skill Id


}
