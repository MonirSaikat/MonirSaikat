import Experience from "components/home/Experience";
import { Header } from "components/home/Header";
import { HomeProjects } from "components/home/HomeProject";
import { Meta } from "components/shared/Meta";
import { Skills } from "components/skills/Skills";

const HomePage = () => {
  return (
    <div>
      <Meta />
      <Header />
      <Skills />
      <HomeProjects />
      <Experience />
    </div>
  );
};

export default HomePage;
