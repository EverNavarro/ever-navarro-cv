import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { TitleComponent } from './components/title/title.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TypographyComponent } from './components/typography/typography.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { BasicsComponent } from './components/basics/basics.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    TitleComponent,
    ResumeComponent,
    TypographyComponent,
    ExperienceComponent,
    AboutMeComponent,
    SkillsComponent,
    EducationComponent,
    BasicsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
