import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Seo from "components/Seo";

const LinkMenu: React.FC = () => {
  return (
    <Link href="/app">
      <a
        className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500"
        href="#"
      ></a>
    </Link>
  );
};

export default LinkMenu;
