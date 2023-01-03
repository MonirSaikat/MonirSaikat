import { Logo } from './Logo';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { activeLink } from 'utils/helpers';
import { MdModeNight } from 'react-icons/md';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const router = useRouter();
  const classes = classNames('hover:text-secondary dark:text-gray-200',
  {
    'text-blue': activeLink(router)
  }
  );

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
      <div className="container flex flex-wrap justify-between mx-auto items-center">
        <Logo />

        <button className='text-xl'>
          <MdModeNight />
        </button>

        <div className='w-full md:block md:w-auto z-20'>
          <ul className='flex mt-2 ml-[-6px] md:ml-0'>
            { renderLinks }
            <li className='mr-0 ml-2'>
              <Link className='hover:text-secondary dark:text-gray-200 flex items-center' href="https://github.com/MonirSaikat" target='_blank'>
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
