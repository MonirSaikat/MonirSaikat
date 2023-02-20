import { Footer } from "components/shared/Footer";
import { Navbar } from "components/shared/Navbar";
import { DefaultSeo } from 'next-seo';
import { NextComponentType } from "next";
import Head from "next/head";
import "../styles/global.css";

interface AppProps {
  Component: NextComponentType;
  pageProps: any;
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="font-inter">
      <DefaultSeo
        title="Monir Saikat"
        themeColor="#000"
        description="Monir Saikat is a talented fullstack developer with expertise in PHP, Javascript, Typescript, Laravel, Node.js, CodeIgniter and modern web development frameworks such as React, Next.js. With years of experience in web design and development, Saikat can help you bring your ideas to life with high-quality, scalable, and efficient solutions. Whether you're looking to build a new website, improve your existing one, or develop a custom web application, Saikat's skills in JavaScript, jQuery, and other technologies make him a reliable and capable partner for your development needs. Visit Monir's website today to learn more about his work and how he can help you achieve your development goals."
        canonical="https://www.monirsaikat.com/projects"
      />
      <Head>
        <meta name="google-site-verification" content="qACtaiYESjTOLv_u5NkBHGUJcQfXKycuCzRsd3ODaMg" />
      </Head>
      <Navbar />
      <div className="container mx-auto pt-3">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
