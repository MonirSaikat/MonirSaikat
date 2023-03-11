export const Header = () => {
  return (
    <header className="py-8 min-h-[400px] flex items-center">
      <div>
        <h1 className="text-3xl md:text-5xl text-sky-500 mb-5 font-bold dark:text-gray-200">
          Hey, I' am Monir Saikat
        </h1>
        <p className="text-sm md:text-xl text-gray-600 mb-5 dark:text-gray-200">
          Full-stack software developer 👨‍💻
        </p>
        <p className="text-sm md:text-xl text-gray-600 dark:text-gray-200">
          I help people to turn their ideas into software that works. Professional
          and cost-effective always.
        </p>
        <p className="text-sm font-light mt-2 text-gray-500">
          ✅ Available for freelance work
        </p>
      </div>
      {/* <div>
        <img className='max-h-96 ml-auto' src={CodeIcon.src} alt="Monir Saikat" />
      </div> */}
    </header>
  );
};
