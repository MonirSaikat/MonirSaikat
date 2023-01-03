import { Header } from 'components/Header';
import { HomeProjects } from 'components/HomeProject';
import { Meta } from 'components/Meta';
import { Skills } from 'components/Skills';

const HomePage = () => {
  return(
    <div>
      <Meta />
      <Header />
      <Skills />
      <HomeProjects />
    </div>
  );
};

export default HomePage;
