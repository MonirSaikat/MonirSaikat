import Head from "next/head";

export const Meta = ({ title = "Monir Saikat" }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Monir Saikat is fullstack web developer. He is building modern web applications with javascript and php"
      />
      <meta
        name="keywords"
        content="monir saikat, moniruzzaman, moniruzzaman saikat, freelance web developer, javascript developer, best web designer in bangladesh, best js developer, web designer, javascript, php, react.js, node.js"
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>"
      />
    </Head>
  );
};
