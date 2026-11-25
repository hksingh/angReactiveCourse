import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ICourseModel } from "../models/course-model";

@Injectable({
    providedIn: 'root'
})
export class SampleCoursesDataService{
    itemsURL = 'api/courses';
    http= inject(HttpClient);

    getAllCourses(): Observable<ICourseModel[]>{
        return this.http.get<ICourseModel[]>(this.itemsURL);
    }
}