import { Component } from '@angular/core';
import { About } from "../about/about";
import { Projects } from "../projects/projects";
import { Contact } from "../contact/contact";
import { Skills } from "../skills/skills";
import { SocialSidebarComponent } from '../social-sidebar/social-sidebar';

@Component({
  selector: 'app-home',
  imports: [About, Projects, Contact, Skills, SocialSidebarComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
