import { Logo } from './Logo';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { activeLink } from 'utils/helpers';
import { MdLightMode, MdModeNight } from 'react-icons/md';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const router = useRouter();
  const [theme, setTheme] = useState('dark');
  const classes = classNames('hover:text-secondary dark:text-gray-200',
  {
    'text-blue': activeLink(router)
  }
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  const onUpdateTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.className = updatedTheme;
    localStorage.setItem('theme', updatedTheme);
    setTheme(updatedTheme);
  };

  const renderLinks = links.map(link => {
    return(
      <li key={link.path} className='mx-2 md:my-0'>
        <Link
          className={`${classes} ${activeLink(router, link.path) ? 'text-orange-600' : 'text-secondary' }`}
          href={link.path}
        >
            {link.label}
        </Link>
      </li>
    );
  });

  return(
    <nav className='py-5 flex items-center dark:bg-gray-900'>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Logo />

          <button
            className='text-xl dark:text-gray-200'
            onClick={onUpdateTheme}
          >
            {
              theme === 'dark' ? <MdLightMode /> : <MdModeNight />
            }
          </button>
        </div>

        <ul className='flex ml-[-6px] md:ml-0 mt-3'>
          { renderLinks }
          <li className='mr-0 ml-2'>
            <Link className='hover:text-secondary dark:text-gray-200 flex items-center' href="https://github.com/MonirSaikat" target='_blank'>
              <span className='mr-2'>Github</span>
              <BiLinkExternal />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
