import { Footer } from "components/shared/Footer";
import { Navbar } from "components/shared/Navbar";
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
