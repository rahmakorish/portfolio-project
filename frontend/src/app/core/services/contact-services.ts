import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IContact } from '../models/contact.model';
import { Contact } from './../../layout/contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServices {
constructor(private http:HttpClient){}

contactAPI = 'http://localhost:3000/contact/';

getContactData():Observable<IContact[]>{
  return this.http.get<IContact[]>(this.contactAPI+'get');
  }
  
updateContactData(ContactData:IContact):Observable<IContact>{
    return this.http.put<IContact>(this.contactAPI+'send', ContactData);
}
}
