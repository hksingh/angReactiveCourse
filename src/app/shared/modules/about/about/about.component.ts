import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { SampleCoursesDataService } from '../../../services/sample-courses-data.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ICourseModel } from '../../../models/course-model';

@Component({
  imports: [AsyncPipe, JsonPipe],
  selector: 'shared-about',
  styleUrl: './about.component.scss',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  sampleCoursesDataService = inject(SampleCoursesDataService);
  coursesData$: Observable<ICourseModel[]>|undefined;
  
  ngOnInit(): void {
    this.coursesData$ = this.sampleCoursesDataService.getAllCourses();
    this.coursesData$.subscribe((x)=> console.log('data : ', x));
  }
  
}
