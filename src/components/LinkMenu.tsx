import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface LinkProps {
    children: ReactNode
    href: string
}

const LinkMenu: React.FC<LinkProps> = ({ children, href }) => {
    //<a className=>
    const router = useRouter();
    const { pathname } = router;
    const selected = pathname === href;

    return (
    <Link href={ href }>
      <a className={ selected ? 
            "w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500": 
            "w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"    
            }>
        { children }
      </a>
    </Link>
  );
};

export default LinkMenu;
