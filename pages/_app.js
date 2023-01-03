import { Navbar } from 'components/Navbar';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return(
    <div className='font-inter'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
