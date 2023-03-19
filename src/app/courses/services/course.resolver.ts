import {CoursesService} from "./courses.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable()
export class CourseResolver implements Resolve<Course> {
  constructor(private coursesService: CoursesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    const courseUrl = route.paramMap.get('courseUrl');
    return this.coursesService.loadCourseByUrl(courseUrl);
  }
}
