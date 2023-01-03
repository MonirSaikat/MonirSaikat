import { Logo } from './Logo';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { activeLink } from 'utils/helpers';
import { RxHamburgerMenu  } from 'react-icons/rx';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const router = useRouter();
  const classes = classNames('hover:text-secondary');

  const renderLinks = links.map(link => {
    return(
      <li key={link.path} className='mx-2 md:my-0'>
        <Link
          className={classes}
          style={{ color: activeLink(router, link.path) ? 'tomato' : '#000' }}
          href={link.path}
        >
            {link.label}
        </Link>
      </li>
    );
  });

  return(
    <nav className='h-28 flex items-center'>
      <div className="container flex flex-wrap justify-between mx-auto items-center">
        <Logo />

        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-label='Toggler' aria-expanded="false">
          <RxHamburgerMenu />
        </button>

        <div className='hidden w-full md:block md:w-auto z-20'>
          <ul className='flex flex-col md:flex-row p-4'>
            { renderLinks }
            <li className='mr-0 ml-2'>
              <Link className='hover:text-secondary flex items-center' href="https://github.com/MonirSaikat" target='_blank'>
                <span className='mr-2'>Github</span>
                <BiLinkExternal />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
