import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from './shared/components/nav-header/nav-header.component';
import { NavFooterComponent } from './shared/components/nav-footer/nav-footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavHeaderComponent, NavFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angReactiveCourse');

}
