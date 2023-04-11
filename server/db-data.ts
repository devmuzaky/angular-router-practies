export const COURSES: any = {


  18: {
    id: 18,
    description: 'Angular Router In Depth',
    longDescription: 'Build large-scale Single Page Applications with the powerful Angular Router',
    iconUrl: 'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-router-course.jpg',
    courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 0,
    url: 'angular-router-course',
    price: 50
  },


  7: {
    id: 7,
    description: 'Angular PWA - Progressive Web Apps Course',
    longDescription: 'Learn Angular Progressive Web Applications, build the future of the Web Today.',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
    courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/alien.png',
    category: 'ADVANCED',
    lessonsCount: 8,
    seqNo: 11,
    url: 'angular-pwa-course',
    price: 50
  },


};

export const LESSONS = {
  // PWA course

  22: {
    id: 22,
    'description': 'Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code',
    'duration': '07:19',
    'seqNo': 1,
    courseId: 7
  }, 23: {
    id: 23,
    'description': 'Service Workers In a Nutshell - Service Worker Registration',
    'duration': '6:59',
    'seqNo': 2,
    courseId: 7
  }, 24: {
    id: 24,
    'description': 'Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools',
    'duration': '7:28',
    'seqNo': 3,
    courseId: 7
  },

  // Angular Router Course
  90: {
    id: 90,
    'description': 'What is a Single Page Application?',
    'duration': '04:00',
    'seqNo': 1,
    courseId: 18,
    videoId: 'VES1eTNxi1s'
  }, 91: {
    id: 91,
    'description': 'Setting Up The Development Environment',
    'duration': '06:05',
    'seqNo': 2,
    courseId: 18,
    videoId: 'ANfplcxnl78'
  }, 92: {
    id: 92, 'description': 'Angular Router Setup', 'duration': '02:36', 'seqNo': 3, courseId: 18, videoId: '9ez72LAd6mM'
  }, 93: {
    id: 93,
    'description': 'Configuring a Home Route and Fallback Route',
    'duration': '02:55',
    'seqNo': 4,
    courseId: 18,
    videoId: 'Clj-jZpl64w'
  }, 94: {
    id: 94,
    'description': 'Styling Active Routes With The routerLinkActive And routerLinkActiveOptions',
    'duration': '07:50',
    'seqNo': 5,
    courseId: 18,
    videoId: 'zcgnsmPVc30'
  }, 95: {
    id: 95,
    'description': 'Child Routes - How To Setup a Master Detail Route',
    'duration': '04:10',
    'seqNo': 6,
    courseId: 18,
    videoId: 'zcgnsmPVc30'
  }, 96: {
    id: 96,
    'description': 'Programmatic Router Navigation via the Router API ',
    'duration': '03:59',
    'seqNo': 7,
    courseId: 18,
    videoId: 'VES1eTNxi1s'
  }, 97: {
    id: 97,
    'description': 'Relative And Absolute Router Navigation',
    'duration': '04:58',
    'seqNo': 8,
    courseId: 18,
    videoId: 'MQl9Zs3QqGM'
  }, 98: {
    id: 98,
    'description': 'Master Detail Navigation And Route Parameters',
    'duration': '06:03',
    'seqNo': 9,
    courseId: 18,
    videoId: 'ANfplcxnl78'
  },

  99: {
    id: 99,
    'description': 'The Route Parameters Observable',
    'duration': '06:50',
    'seqNo': 10,
    courseId: 18,
    videoId: 'zcgnsmPVc30'
  }, 100: {
    id: 100,
    'description': 'Optional Route Query Parameters',
    'duration': '03:03',
    'seqNo': 11,
    courseId: 18,
    videoId: '0Qsg8fyKwO4'
  }, 101: {
    id: 101,
    'description': 'The queryParams Directive and the Query Parameters Observable',
    'duration': '07:50',
    'seqNo': 12,
    courseId: 18,
    videoId: 'VES1eTNxi1s'
  }, 102: {
    id: 102,
    'description': 'Exiting an Angular Route - How To Prevent Memory Leaks',
    'duration': '07:50',
    'seqNo': 13,
    courseId: 18,
    videoId: 'ANfplcxnl78'
  }, 103: {
    id: 103,
    'description': 'CanDeactivate Route Guard',
    'duration': '04:50',
    'seqNo': 14,
    courseId: 18,
    videoId: '9ez72LAd6mM'
  }, 104: {
    id: 104,
    'description': 'CanActivate Route Guard - An Example of An Asynchronous Route Guard',
    'duration': '03:32',
    'seqNo': 15,
    courseId: 18,
    videoId: 'Clj-jZpl64w'
  },


  105: {
    id: 105,
    'description': 'Configure Auxiliary Routes in the Angular Router',
    'duration': '05:16',
    'seqNo': 16,
    courseId: 18,
    videoId: 'zcgnsmPVc30'
  },

  106: {
    id: 106,
    'description': 'Angular Auxiliary Routes - How To Pass Router Parameters',
    'duration': '07:50',
    'seqNo': 17,
    courseId: 18,
    videoId: 'yjQUkNHb1Is'
  }, 107: {
    id: 107,
    'description': 'Angular Router Redirects and Path Matching',
    'duration': '02:59',
    'seqNo': 18,
    courseId: 18,
    videoId: 'VES1eTNxi1s'
  }, 108: {
    id: 108,
    'description': 'Angular Router Hash Location Strategy',
    'duration': '07:50',
    'seqNo': 19,
    courseId: 18,
    videoId: 'MQl9Zs3QqGM'
  }, 109: {
    id: 109,
    'description': 'Angular Router Lazy Loading and Shared Modules',
    'duration': '08:45',
    'seqNo': 20,
    courseId: 18,
    videoId: '0Qsg8fyKwO4'
  }, 110: {
    id: 110,
    'description': 'Exercise - Implement a Widget Dashboard',
    'duration': '07:50',
    'seqNo': 21,
    courseId: 18,
    videoId: 'VES1eTNxi1s'
  }, 111: {
    id: 111, 'description': 'Exercise Solution ', 'duration': '07:50', 'seqNo': 22, courseId: 18, videoId: '0Qsg8fyKwO4'
  }


};


export const USERS = {
  1: {
    id: 1,
    email: 'moe_zaki@gmail.com',
    password: 'moe_',
    pictureUrl: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png'
  }

};


export function findCourseById(courseId: number) {
  return COURSES[courseId];
}

export function findLessonsForCourse(courseId: number) {
  return Object.values(LESSONS).filter(lesson => lesson.courseId == courseId);
}

export function authenticate(email: string, password: string) {

  const user: any = Object.values(USERS).find(user => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }

}
