import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { FrontEndComponent } from './components/front-end/front-end.component';
import { BackEndComponent } from './components/back-end/back-end.component';
import { GetTouchComponent } from './components/get-touch/get-touch.component';

const routes: Routes = [
    {
     path: '',
      component: MainComponent,

    },
    {
      path: 'skills',
      component: SkillsComponent,

    },
    {
      path: 'hobby',
      component: HobbyComponent,

    },
     {
      path: 'front',
      component: FrontEndComponent,

    },
    {
      path: 'back',
      component: BackEndComponent,

    },
    {
        path: 'getin',
        component: GetTouchComponent,

      },
  ];

  export const route: ModuleWithProviders = RouterModule.forRoot(routes);
