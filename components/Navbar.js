import { Logo } from './Logo';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { activeLink } from 'utils/helpers';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const router = useRouter();
  const classes = classNames('hover:text-sky-700');

  const renderLinks = links.map(link => {
    return(
      <li key={link.path} className='mx-2'>
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
      <div className="container flex justify-between mx-auto">
        <Logo />

        <ul className='flex'>
          { renderLinks }
          <li className='mr-0 ml-2'>
            <Link className='hover:text-primary flex items-center' href="https://github.com/MonirSaikat" target='_blank'>
              <span className='mr-2'>Github</span>
              <BiLinkExternal />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
