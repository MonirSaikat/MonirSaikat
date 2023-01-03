export const Header = () => {
  return(
    <header className='py-8 min-h-[300px] flex items-center'>
      <div>
        <h1 className="text-3xl md:text-5xl text-gray-700 mb-5 font-bold">Hey, I' am Saikat</h1>
        <p className="text-xl text-gray-600 mb-5">Full-stack software engineer 👨‍💻</p>
        <p className="text-xl text-gray-600">
          I help people turn their ideas into
          websites that work.
          Professional and Cost-Effective.
          Always.
        </p>
      </div>
      {/* <div>
        <img className='max-h-96 ml-auto' src={CodeIcon.src} alt="Monir Saikat" />
      </div> */}
    </header>
  );
};
