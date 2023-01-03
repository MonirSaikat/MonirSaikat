import { Logo } from './Logo';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

export const Navbar = () => {
  return(
    <nav className='h-28 flex items-center'>
      <div className="container flex justify-between mx-auto">
        <Logo />

        <ul className='flex'>
          <li className='mx-2'><Link className='hover:text-primary' href="#">About</Link></li>
          <li className='mx-2'><Link className='hover:text-primary' href="#">Skill</Link></li>
          <li className='mx-2'><Link className='hover:text-primary' href="#">Projects</Link></li>
          <li className='mx-2'><Link className='hover:text-primary' href="#">Contact</Link></li>
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
