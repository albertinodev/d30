import Link from "next/link";
import { ReactNode } from "react";

interface LinkProps {
    children: ReactNode
    href: string
}

const LinkMenu: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <Link href="/app">
      <a className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500">
        { children }
      </a>
    </Link>
  );
};

export default LinkMenu;
