import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="text-xl font-semibold text-gray-700">
      <span className="text-2xl">💻 </span>
      <span className="dark:text-gray-200">Monir </span>
      <span className="dark:text-gray-200">Saikat</span>
    </Link>
  );
};
