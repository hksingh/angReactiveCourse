import { Injectable} from '@angular/core';
import { InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { COURSES } from '../data/db-data';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        return { courses: COURSES};
    }


    // createDb(_reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    //     return { courses: COURSES};
    // }

}