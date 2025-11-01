import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserData } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutServices {
aboutAPI = 'http://localhost:3000/about/'
constructor(private http:HttpClient){}
//get data
getAboutData():Observable<any>{
  return this.http.get(this.aboutAPI);
}
//send data
editAbout(aboutData:IUserData):Observable<IUserData>{
    return this.http.put<IUserData>(this.aboutAPI, aboutData);
}
}
