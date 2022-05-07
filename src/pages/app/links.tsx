import type { NextPage } from "next";
import Seo from "components/Seo";
import Heading1 from "components/Heading1";
import Heading2 from "components/Heading2";

const Links: NextPage = () => {
  return (
    <>
      <Seo title="Links" />
      <div className="grid grid-cols-2 md:grid-cols-2">
        <div>
          <Heading1>Seja bem vindo</Heading1>
          <Heading2>Gerenciador de links</Heading2>
        </div>
        <div className="flex items-center">
            <button type="button" className="w-full border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 px-4 py-2">
                Criar Link
            </button>
            <button type="button" className="w-full border text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-2">
                Criar Grupo
            </button>
            <button type="button" className="w-full border-t border-b border-r text-base font-medium rounded-r-md text-black bg-white hover:bg-gray-100 px-4 py-2">
                Right
            </button>
        </div>
      </div>
    </>
  );
};

export default Links;
