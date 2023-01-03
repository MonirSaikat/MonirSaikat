import courseBuzzImg from 'assets/projects/course-buzz.png';
import fizzFoodImg from 'assets/projects/fizz-food.png';

export const projectsArray = [
  {
    year: 2022,
    title: 'Course Buzz',
    subtitle: 'Course management website',
    details: `This is full stack website built for managing online courses. The purpose of this website is to copy a youtube video link and save to this website and it will show the thumbnail here. `,
    slug: 'course-buzz',
    liveUrl: 'https://course-buzz.web.app/',
    githubUrl: 'https://github.com/MonirSaikat/course-buzz-frontend',
    githubBackendUrl: 'https://github.com/MonirSaikat/course-buzz-backend',
    technologies: ['node.js', 'react', 'mongodb', 'firebase', 'react-router-dom'],
    image: courseBuzzImg,
  },
  {
    year: 2022,
    title: 'Fizz Food',
    subtitle: 'Online food delivary website',
    details: `This is online food delivery website. The purpose of this website was to learn firebase auth and react stripe.`,
    slug: 'fizz-food',
    liveUrl: 'https://course-buzz.web.app/',
    githubUrl: 'https://github.com/MonirSaikat/fizz-food',
    technologies: ['react.js', 'firebase','react-stripe-checkout'],
    image: fizzFoodImg,
  }
];


export const getProjectBySlug = (slug) => {
  return projectsArray.find(project => project.slug === slug);
}
