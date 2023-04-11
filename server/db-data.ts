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


  3: {
    id: 3,
    description: 'RxJs In Practice Course',
    longDescription: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
    courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
    category: 'BEGINNER',
    lessonsCount: 10,
    seqNo: 2,
    url: 'rxjs-course',
    price: 50
  },


  6: {
    id: 6,
    description: 'Angular Security Course - Web Security Fundamentals',
    longDescription: 'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
    courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
    category: 'ADVANCED',
    lessonsCount: 11,
    seqNo: 10,
    url: 'angular-security-course',
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
  // Security Course
  11: {
    id: 11,
    'description': 'Course Helicopter View',
    'duration': '08:19',
    'seqNo': 1,
    courseId: 6
  },

  12: {
    id: 12,
    'description': 'Installing Git, Node, NPM and Choosing an IDE',
    'duration': '04:17',
    'seqNo': 2,
    courseId: 6
  },

  13: {
    id: 13,
    'description': 'Installing The Lessons Code - Learn Why Its Essential To Use NPM 5',
    'duration': '06:05',
    'seqNo': 3,
    courseId: 6
  },

  14: {
    id: 14,
    'description': 'How To Run Node In TypeScript With Hot Reloading',
    'duration': '03:57',
    'seqNo': 4,
    courseId: 6
  },

  15: {
    id: 15,
    'description': 'Guided Tour Of The Sample Application',
    'duration': '06:00',
    'seqNo': 5,
    courseId: 6
  },
  16: {
    id: 16,
    'description': 'Client Side Authentication Service - API Design',
    'duration': '04:53',
    'seqNo': 6,
    courseId: 6
  },
  17: {
    id: 17,
    'description': 'Client Authentication Service - Design and Implementation',
    'duration': '09:14',
    'seqNo': 7,
    courseId: 6
  },
  18: {
    id: 18,
    'description': 'The New Angular HTTP Client - Doing a POST Call To The Server',
    'duration': '06:08',
    'seqNo': 8,
    courseId: 6
  },
  19: {
    id: 19,
    'description': 'User Sign Up Server-Side Implementation in Express',
    'duration': '08:50',
    'seqNo': 9,
    courseId: 6
  },
  20: {
    id: 20,
    'description': 'Introduction To Cryptographic Hashes - A Running Demo',
    'duration': '05:46',
    'seqNo': 10,
    courseId: 6
  },
  21: {
    id: 21,
    'description': 'Some Interesting Properties Of Hashing Functions - Validating Passwords',
    'duration': '06:31',
    'seqNo': 11,
    courseId: 6
  },


  // PWA course

  22: {
    id: 22,
    'description': 'Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code',
    'duration': '07:19',
    'seqNo': 1,
    courseId: 7
  },
  23: {
    id: 23,
    'description': 'Service Workers In a Nutshell - Service Worker Registration',
    'duration': '6:59',
    'seqNo': 2,
    courseId: 7
  },
  24: {
    id: 24,
    'description': 'Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools',
    'duration': '7:28',
    'seqNo': 3,
    courseId: 7
  },
  25: {
    id: 25,
    'description': 'Service Workers and Application Versioning - Install & Activate Lifecycle Phases',
    'duration': '10:17',
    'seqNo': 4,
    courseId: 7
  },

  26: {
    id: 26,
    'description': 'Downloading The Offline Page - The Service Worker Installation Phase',
    'duration': '09:50',
    'seqNo': 5,
    courseId: 7
  },
  27: {
    id: 27,
    'description': 'Introduction to the Cache Storage PWA API',
    'duration': '04:44',
    'seqNo': 6,
    courseId: 7
  },
  28: {
    id: 28,
    'description': 'View Service Workers HTTP Interception Features In Action',
    'duration': '06:07',
    'seqNo': 7,
    courseId: 7
  },
  29: {
    id: 29,
    'description': 'Service Workers Error Handling - Serving The Offline Page',
    'duration': '5:38',
    'seqNo': 8,
    courseId: 7
  },

  // Reactive Angular Course

  80: {
    id: 80,
    'description': 'Introduction to Reactive Programming',
    'duration': '03:45',
    'seqNo': 0,
    courseId: 17,
    videoId: 'Df1QnesgB_s',
  },
  81: {
    id: 81,
    'description': 'Introduction to RxJs',
    'duration': '08:36',
    'seqNo': 1,
    courseId: 17,
    videoId: '8m5RrAtqlyw',
  },
  82: {
    id: 82,
    'description': 'Setting up the development environment',
    'duration': '09:10',
    'seqNo': 2,
    courseId: 17,
    videoId: '3fDbUB-nKqc',
  },
  83: {
    id: 83,
    'description': 'Designing and building a Service Layer',
    'duration': '07:20',
    'seqNo': 3,
    courseId: 17,
    videoId: '',
  },
  84: {
    id: 84,
    'description': 'Stateless Observable Services',
    'duration': '11:47',
    'seqNo': 4,
    courseId: 17,
    videoId: 'qvDPnRs_ZPA',
  },
  85: {
    id: 85,
    'description': 'Smart vs Presentational Components',
    'duration': '06:30',
    'seqNo': 5,
    courseId: 17,
    videoId: '5bsZJGAelFM',
  },
  86: {
    id: 86,
    'description': 'Lightweight state management',
    'duration': '4:13',
    'seqNo': 6,
    courseId: 17,
    videoId: '9m3_HHeP9Ko',
  },
  87: {
    id: 87,
    'description': 'Event bubbling anti-pattern',
    'duration': '05:47',
    'seqNo': 7,
    courseId: 17,
    videoId: 'PRQCAL_RMVo',
  },
  88: {
    id: 88,
    'description': 'Master detail with cached master table',
    'duration': '05:17',
    'seqNo': 8,
    courseId: 17,
    videoId: 'du4ib4jBUG0'
  },
  89: {
    id: 89,
    'description': 'Error handling',
    'duration': '07:50',
    'seqNo': 9,
    courseId: 17,
    videoId: '8m5RrAtqlyw'
  },


  // Angular Router Course
  90: {
    id: 90,
    'description': 'What is a Single Page Application?',
    'duration': '04:00',
    'seqNo': 1,
    courseId: 18,
    videoId: 'VES1eTNxi1s'
  },
  91: {
    id: 91,
    'description': 'Setting Up The Development Environment',
    'duration': '06:05',
    'seqNo': 2,
    courseId: 18,
    videoId: 'ANfplcxnl78'
  },
  92: {
    id: 92,
    'description': 'Angular Router Setup',
    'duration': '02:36',
    'seqNo': 3,
    courseId: 18,
    videoId: '9ez72LAd6mM'
  },
  93: {
    id: 93,
    'description': 'Configuring a Home Route and Fallback Route',
    'duration': '02:55',
    'seqNo': 4,
    courseId: 18,
    videoId: 'Clj-jZpl64w'
  },
  94: {
    id: 94,
    'description': 'Styling Active Routes With The routerLinkActive And routerLinkActiveOptions',
    'duration': '07:50',
    'seqNo': 5,
    courseId: 18,
    videoId: 'zcgnsmPVc30'
  },
  95: {
    id: 95,
    'description': 'Child Routes - How To Setup a Master Detail Route',
    'duration': '04:10',
    'seqNo': 6,
    courseId: 18,
    videoId: 'zcgnsmPVc30'
  },
  96: {
    id: 96,
    'description': 'Programmatic Router Navigation via the Router API ',
    'duration': '03:59',
    'seqNo': 7,
    courseId: 18,
    videoId: 'VES1eTNxi1s'
  },
  97: {
    id: 97,
    'description': 'Relative And Absolute Router Navigation',
    'duration': '04:58',
    'seqNo': 8,
    courseId: 18,
    videoId: 'MQl9Zs3QqGM'
  },
  98: {
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
  },
  100: {
    id: 100,
    'description': 'Optional Route Query Parameters',
    'duration': '03:03',
    'seqNo': 11,
    courseId: 18,
    videoId: '0Qsg8fyKwO4'
  },
  101: {
    id: 101,
    'description': 'The queryParams Directive and the Query Parameters Observable',
    'duration': '07:50',
    'seqNo': 12,
    courseId: 18,
    videoId: 'VES1eTNxi1s'
  },
  102: {
    id: 102,
    'description': 'Exiting an Angular Route - How To Prevent Memory Leaks',
    'duration': '07:50',
    'seqNo': 13,
    courseId: 18,
    videoId: 'ANfplcxnl78'
  },
  103: {
    id: 103,
    'description': 'CanDeactivate Route Guard',
    'duration': '04:50',
    'seqNo': 14,
    courseId: 18,
    videoId: '9ez72LAd6mM'
  },
  104: {
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
  },
  107: {
    id: 107,
    'description': 'Angular Router Redirects and Path Matching',
    'duration': '02:59',
    'seqNo': 18,
    courseId: 18,
    videoId: 'VES1eTNxi1s'
  },
  108: {
    id: 108,
    'description': 'Angular Router Hash Location Strategy',
    'duration': '07:50',
    'seqNo': 19,
    courseId: 18,
    videoId: 'MQl9Zs3QqGM'
  },
  109: {
    id: 109,
    'description': 'Angular Router Lazy Loading and Shared Modules',
    'duration': '08:45',
    'seqNo': 20,
    courseId: 18,
    videoId: '0Qsg8fyKwO4'
  },
  110: {
    id: 110,
    'description': 'Exercise - Implement a Widget Dashboard',
    'duration': '07:50',
    'seqNo': 21,
    courseId: 18,
    videoId: 'VES1eTNxi1s'
  },
  111: {
    id: 111,
    'description': 'Exercise Solution ',
    'duration': '07:50',
    'seqNo': 22,
    courseId: 18,
    videoId: '0Qsg8fyKwO4'
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
