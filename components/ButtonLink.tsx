import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

interface ButtonLinkProps {
  children: React.ReactChild;
  url?: string;
  className?: string;
  external?: boolean;
}

export const ButtonLink = ({
  children,
  url,
  className,
  external = false,
}: ButtonLinkProps) => {
  const classes = classNames(
    "border border-gray-300 px-4 py-1 text-sm rounded-full inline-flex items-center hover:border-gray-500 bg-white dark:bg-gray-800 dark:text-gray-300",
    className
  );

  return (
    <Link
      className={classes}
      href={url || ""}
      target={external ? "_blank" : "_self"}
    >
      {children}
      {external && <BiLinkExternal className="ml-1" />}
    </Link>
  );
};
