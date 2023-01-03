import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return(
    <div className='font-inter'>
      <Navbar />
      <div className="container mx-auto">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
