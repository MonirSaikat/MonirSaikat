import { Footer } from "components/shared/Footer";
import { Navbar } from "components/shared/Navbar";
import { NextComponentType } from "next";
import "../styles/global.css";

interface AppProps {
  Component: NextComponentType;
  pageProps: any;
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="container mx-auto pt-3">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
