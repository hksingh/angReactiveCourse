import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'home'
    }, 
    {
        path: 'home',
        loadChildren: () => import('../app/shared/modules/home/home-module').then((m) => m.HomeModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('../app/shared/modules/contact/contact-module').then((m) => m.ContactModule)
    },
    {
        path: 'about',
        loadChildren: () => import('../app/shared/modules/about/about-module').then((m) => m.AboutModule)
    },
    { path: '**', redirectTo: 'home'}

];
