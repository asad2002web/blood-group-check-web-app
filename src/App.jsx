import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import Layout from './components/Layout/Layout';
import { useEffect, useState } from 'react';
import Loading from './components/Layout/Loading';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);


  return (
    <div>
      {
        isLoading ? <Loading /> : <Layout />
      }
    </div>
  )
}

export default App
