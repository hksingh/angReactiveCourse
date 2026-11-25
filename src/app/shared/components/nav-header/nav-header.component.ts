import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'shared-nav-header',
  styleUrl: './nav-header.component.scss',
  templateUrl: './nav-header.component.html',
})
export class NavHeaderComponent {
menuOpen = false;
toggleMenu(): void {
  this.menuOpen = !this.menuOpen;
}

closeMenu(): void {
  this.menuOpen = false;
}

}
