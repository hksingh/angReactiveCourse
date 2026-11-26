import { Component, Input } from '@angular/core';
import { ICourseModel } from '../../models/course-model';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  imports: [MatCardModule, MatButtonModule],
  selector: 'shared-my-card',
  styleUrl: './my-card.component.scss',
  templateUrl: './my-card.component.html',
  standalone: true
})
export class MyCardComponent {
  @Input() course?:ICourseModel;
}
