import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-sidebar.html',
  styleUrls: ['./social-sidebar.css']
})
export class SocialSidebarComponent {
  socialLinks = [
    { name: 'LinkedIn', iconClass: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/rahma-korish/' },
    { name: 'GitHub', iconClass: 'fab fa-github', url: 'https://github.com/rahmakorish' },
    // { name: 'Twitter', iconClass: 'fab fa-twitter', url: 'https://twitter.com/yourprofile' },
    // { name: 'Instagram', iconClass: 'fab fa-instagram', url: 'https://www.instagram.com/yourprofile' }
  ];
}
