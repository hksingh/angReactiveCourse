import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { aboutRoutes } from './about/about-routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(aboutRoutes)],
})
export class AboutModule {}
