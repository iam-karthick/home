import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule, MatButtonModule, MatMenuModule, MatListModule} from '@angular/material';
import {MatCardModule, MatProgressSpinnerModule, MatGridListModule} from '@angular/material';
import {MatTabsModule, MatExpansionModule} from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { MainComponent } from './components/main/main.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { FrontEndComponent } from './components/front-end/front-end.component';
import { BackEndComponent } from './components/back-end/back-end.component';
import { GithubService } from './components/github/github.service';

import { route } from './app.routing';
import { GetTouchComponent } from './components/get-touch/get-touch.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    MainComponent,
    SkillsComponent,
    HobbyComponent,
    FrontEndComponent,
    BackEndComponent,
    GetTouchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    route,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatExpansionModule,
    MatGridListModule,
    HttpModule
    ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
