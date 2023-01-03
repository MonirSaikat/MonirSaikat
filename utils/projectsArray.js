import courseBuzzImg from 'assets/projects/course-buzz.png';
import fizzFoodImg from 'assets/projects/fizz-food.png';
import gmailLpImg from 'assets/projects/gmail-lp.png';

export const projectsArray = [
  {
    year: '2022 - present',
    title: 'ARS Furniture',
    subtitle: 'Online furniture e-commerce website',
    details: `This is an ecommerce website for furniture stuffs. Users Can login via via google or manually. Users have two different type, admin and non-admin. Admin users can add products and show all reviews. Users can add product to cart, leave a review for the website and much more. I have been started working on this project backin 2022 and still updating stuffs.`,
    slug: 'ars-furniture',
    liveUrl: 'https://course-buzz.web.app/',
    githubUrl: 'https://github.com/MonirSaikat/ars-furniture-frontend',
    githubBackendUrl: 'https://github.com/MonirSaikat/ars-furniture-backend',
    technologies: ['react.js', 'swiper', 'firebase', 'react-quill', 'sweetalert'],
    image: fizzFoodImg,
  },
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
  },
  {
    year: 2022,
    title: 'Gmail Landing Page',
    subtitle: 'A static landing page',
    details: `This is a static html page. I tried to clone the landing page from gmail for practising tailwindcss back in 2022`,
    slug: 'gmail-lp',
    liveUrl: 'https://stalwart-semolina-0bf8df.netlify.app/',
    githubUrl: 'https://github.com/MonirSaikat/gmail-lp',
    technologies: ['html', 'css', 'tailwindcss', 'jQuery'],
    image: gmailLpImg,
  }
];


export const getProjectBySlug = (slug) => {
  return projectsArray.find(project => project.slug === slug);
}
