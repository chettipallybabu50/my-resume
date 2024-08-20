import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HobbiesSectionComponent } from './hobbies-section/hobbies-section.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'

  },
  {
    component :ExperienceComponent,
    path : 'emp-experience'
  },
  {
    component : EducationComponent,
    path: 'emp-education'
  },{
    component: HobbiesSectionComponent,
    path: 'hobbies-section'
  },{
    component: SkillsComponent,
    path: 'skill-section'
  },{
    component: ProjectSectionComponent,
    path: 'project-section'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
