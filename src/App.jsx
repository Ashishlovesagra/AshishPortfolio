import { useEffect } from 'react';
import './App.css';
import AllRoutes from './utilies/AllRoutes';

function App() {
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0); 
    };

    handleRouteChange();

  }, []);

  return (
    <div className='main-wrapper'>
      <AllRoutes />
    </div>
  );
}

export default App;
