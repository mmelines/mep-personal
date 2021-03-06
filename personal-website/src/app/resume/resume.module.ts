import { NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'

import { ContactComponent } from './contact/contact.component'
import { EducationComponent } from './education/education.component'
import { ExperienceComponent } from './experience/experience.component'
import { HobbiesComponent } from './hobbies/hobbies.component'
import { ProjectsComponent } from './projects/projects.component'
import { SkillsComponent } from './skills/skills.component'
import { TechComponent } from './technologies/technologies.component'

@NgModule({
    imports: [CommonModule],
    declarations: [ContactComponent, EducationComponent, ExperienceComponent, HobbiesComponent,ProjectsComponent, TechComponent, SkillsComponent],
    exports: [ContactComponent, EducationComponent, ExperienceComponent, HobbiesComponent, ProjectsComponent, TechComponent, SkillsComponent]
})

export class ResumeModule { }