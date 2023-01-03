import CodeIcon from 'assets/code.png';

export const Header = () => {
  return(
    <header className='grid grid-cols-2 py-8 items-center'>
      <div className='max-w-xl'>
        <h1 className="text-5xl text-gray-800 mb-5 font-bold">Hey, I' am Saikat</h1>
        <p className="text-xl text-gray-700 mb-5">Welcome to my website 🕸</p>
        <p className="text-xl text-gray-700">
          I help people turn their ideas into
          sites & apps that work.
          Professional and Cost-Effective.
          Always.
        </p>
      </div>
      <div>
        <img className='max-h-96 ml-auto' src={CodeIcon.src} alt="Monir Saikat" />
      </div>
    </header>
  );
};
