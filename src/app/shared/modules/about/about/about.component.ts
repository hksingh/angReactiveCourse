import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { SampleCoursesDataService } from '../../../services/sample-courses-data.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ICourseModel } from '../../../models/course-model';
import { MatTabsModule } from '@angular/material/tabs';
import { MyCardComponent } from '../../../components/my-card/my-card.component';

@Component({
  imports: [AsyncPipe, MatTabsModule, MyCardComponent],
  selector: 'shared-about',
  styleUrl: './about.component.scss',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  sampleCoursesDataService = inject(SampleCoursesDataService);
  coursesData$: Observable<ICourseModel[]>|undefined;
  beginnerCourseData$: Observable<ICourseModel[]>| undefined;
  advancedCourseData$: Observable<ICourseModel[]>|undefined;
  
  ngOnInit(): void {
    this.coursesData$ = this.sampleCoursesDataService.getAllCourses();
    this.beginnerCourseData$ = this.coursesData$.pipe(map((x:ICourseModel[]) => x.filter(x => x.category === 'BEGINNER')));
    this.advancedCourseData$ = this.coursesData$.pipe(map((x: ICourseModel[]) => x.filter(y => y.category === 'ADVANCED')));
    this.coursesData$.subscribe((x)=> console.log('data : ', x));
  }
  
}
