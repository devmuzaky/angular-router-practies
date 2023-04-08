import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    course: Course;
    couponCode: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
      this.course = this.route.snapshot.data['course'];

    }


}











