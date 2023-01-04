export interface Project {
  year: string | number;
  title: string;
  subtitle: string;
  details: string;
  slug: string;
  liveUrl: string;
  githubUrl: string;
  githubBackendUrl?: string;
  technologies: string[];
  image?: any;
}
