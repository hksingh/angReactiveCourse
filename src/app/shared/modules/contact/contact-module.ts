import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { contactRoutes } from './contact-routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(contactRoutes)],
})
export class ContactModule {}
