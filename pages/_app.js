import { Navbar } from 'components/Navbar';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return(
    <div className='font-inter'>
      <Navbar />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
