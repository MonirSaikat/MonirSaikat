import Link from 'next/link';

export const Logo = () => {
  return(
    <Link href="/" className='text-xl font-semibold text-gray-700'>
      <span className='text-2xl'>💻 </span>
      <span className=''>Monir </span>
      <span className=''>Saikat</span>
    </Link>
  );
};
