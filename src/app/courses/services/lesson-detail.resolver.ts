import {LessonDetail} from "../model/lesson-detail";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CoursesService} from "./courses.service";
import {Injectable} from "@angular/core";

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {

  constructor(private courses: CoursesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<LessonDetail> {

    const courseUrl = route.parent.paramMap.get("courseUrl"),
      lessonSeqNo = route.paramMap.get("lessonSeqNo");
    console.log(route)
    return this.courses.loadLessonDetail(courseUrl, lessonSeqNo);
  }
}
