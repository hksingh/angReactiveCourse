import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';

export const aboutRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
