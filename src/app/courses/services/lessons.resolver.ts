import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {LessonSummary} from "../model/lesson-summary";
import {CoursesService} from "./courses.service";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LessonsResolver implements Resolve<LessonSummary[]> {

  constructor(private courses: CoursesService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<LessonSummary[]> {

    const courseUrl = route.paramMap.get('courseUrl');

    return this.courses.loadAllCourseLessonsSummary(courseUrl);

  }

}
