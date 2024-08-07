import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Observable, of } from 'rxjs';
import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver {
  constructor(private service: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({_id: '', name: '', category: ''});
  }
}
