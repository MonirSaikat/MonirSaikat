import Link from "next/link";
import classNames from "classnames";
import { AiFillLinkedin } from "react-icons/ai";
import { RxGithubLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";

const links = [
  {
    ariaLabel: "Visit my linkedin",
    href: "https://www.linkedin.com/in/moniruzzamansaikat/",
    icon: <AiFillLinkedin />,
  },
  {
    for: "Github",
    href: "https://github.com/MonirSaikat",
    icon: <RxGithubLogo />,
  },
  {
    for: "Email",
    href: "mailto:monirsaikat1@gmail.com",
    icon: <MdEmail />,
  },
];

export const Footer = () => {
  const linkClasses = classNames(
    "text-3xl text-gray-700 hover:text-gray-800 mr-5 dark:text-gray-300"
  );

  const renderCopyrightText = (
    <p className="text-center font-semibold text-gray-600 dark:text-gray-300">
      &copy; Monir Saikat | {new Date().getFullYear()}
    </p>
  );

  return (
    <footer className="py-5">
      <div className="flex justify-center my-3">
        {links.map((link) => (
          <Link
            key={link.href}
            aria-label={link.ariaLabel}
            href={link.href}
            className={linkClasses}
            target="_blank"
          >
            <AiFillLinkedin />
          </Link>
        ))}
      </div>

      {renderCopyrightText}
    </footer>
  );
};
