import { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { SkillItem } from './SkillItem';
import Marquee from 'react-fast-marquee';
import typeScriptImage from 'assets/typescript.png';
import javascriptImage from 'assets/javascript.png';
import phpImage from 'assets/php-logo.png';
import nodeImage from 'assets/node-js.png';
import laravelImage from 'assets/laravel.png';
import reactImage from 'assets/react.png';
import reduxImage from 'assets/redux.png';
import mongoDBImage from 'assets/mongodb.png';
import mysqlImage from 'assets/mysql-logo.png';

export const Skills = () => {
  const [skills] = useState([
    { label: 'JavaScript', image: javascriptImage },
    { label: 'TypeScript', image: typeScriptImage },
    { label: 'PHP', image: phpImage },
    { label: 'Node.js', image: nodeImage },
    { label: 'Laravel', image: laravelImage },
    { label: 'React.js', image: reactImage },
    { label: 'Redux', image: reduxImage },
    { label: 'MongoDB', image: mongoDBImage },
    { label: 'MySQL', image: mysqlImage }
  ]);

  const renderSkills = skills.map(skill => {
    return(
      <SkillItem key={skill.label} skill={skill} />
    );
  });

  return(
    <section id='skills' className='py-8 my-10'>
      <SectionTitle>Skills</SectionTitle>
      <Marquee gradient={false} className='bg-transparent'>
        {renderSkills}
      </Marquee>
    </section>
  );
};
