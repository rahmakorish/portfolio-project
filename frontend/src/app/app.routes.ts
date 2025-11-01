import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { Layout } from './layout/layout';
import { About } from './layout/about/about';
import { Contact } from './layout/contact/contact';
import { Home } from './layout/home/home';
import { Projects } from './layout/projects/projects';
import { Dashboard } from './dashboard/dashboard';
import { Component } from '@angular/core';
import { AboutEdit } from './dashboard/about-edit/about-edit';
import { Updatecontact } from './dashboard/updatecontact/updatecontact';
import { Updateprojects } from './dashboard/updateprojects/updateprojects';
import { Skills } from './layout/skills/skills';
import { Updateskills } from './dashboard/updateskills/updateskills';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'about', component:About},
    {path:'contact', component:Contact},
    {path:'projects', component:Projects},
    {path:'skills', component:Skills},
    {path:'dashboard', component:Dashboard, children:[
    {path:'editAbout', component:AboutEdit},
    {path:'updatecontact', component:Updatecontact},
    {path:'updateprojects', component:Updateprojects},
    {path:'updateskills', component:Updateskills},
    {path:'',redirectTo:'home',pathMatch:'full'}
    ]}
    ,
    {path:'**',component: NotFound}
];
