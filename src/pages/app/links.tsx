import type { NextPage } from "next";
import Seo from "components/Seo";
import Heading1 from "components/Heading1";
import Heading2 from "components/Heading2";

const Links: NextPage = () => {
  return (
    <>
      <Seo title="Links" />
      <Heading1>Seja bem vindo</Heading1>
      <Heading2>Gerenciador de links</Heading2>
    </>
  );
};

export default Links;
