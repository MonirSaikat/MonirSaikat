import { AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import { RxGithubLogo } from 'react-icons/rx';
import { MdEmail } from 'react-icons/md';
import classNames from 'classnames';

export const Footer = () => {
  const linkClasses = classNames('text-3xl text-gray-700 hover:text-gray-800 mr-5');

  return(
    <footer className='py-5'>
      <div className='flex justify-center my-3'>
        <Link href='https://www.linkedin.com/in/moniruzzamansaikat/' className={linkClasses}>
          <AiFillLinkedin />
        </Link>
        <Link href='https://github.com/MonirSaikat' className={linkClasses}>
          <RxGithubLogo />
        </Link>
        <a href="mailto:monirsaikat1@gmail.com" className={`${linkClasses} mr-0`}>
          <MdEmail />
        </a>
      </div>
      <p
        className="text-center font-semibold text-gray-600"
      >
        &copy; Monir Saikat | { new Date().getFullYear() }
      </p>
    </footer>
  );
};
