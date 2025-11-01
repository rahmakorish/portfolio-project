import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from './../models/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectServices {
  // create channel with data via HTTPCLIENT
  constructor(private http:HttpClient){}

  projectAPI= 'http://localhost:3000/projects/'

//get data from httpclient, will return observable of type IProject
  getProjectsData():Observable<IProject[]>{
    return this.http.get<IProject[]>(this.projectAPI)
  }
//add new project 
addnewProject(projectData:IProject):Observable<IProject>{
  return this.http.post<IProject>(this.projectAPI,projectData)
}

//update and delete certain project (Incoming sooooooon)
}
