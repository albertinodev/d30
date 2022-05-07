import Head from "next/head";

interface HeadProps {
    title: string 
    description?: string | ''
    keywords?: string | ''
    iconPath?: string | '/favicon.ico'
}

const Seo: React.FC<HeadProps> = ({ title, description, keywords, iconPath }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name='description' content={ description } />
        <meta name='keywords' content={ keywords } />
        <link rel='icon' href={ iconPath }/>
      </Head>
    </>
  );
};

export default Seo;
