import 'bootstrap/dist/css/bootstrap.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import Layout from './components/Layout/Layout';
import { useEffect, useState } from 'react';
import Loading from './components/Layout/Loading';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);


  return (
    <div>
      {
        isLoading ? <Loading /> : <>
        <Layout />
        </>
      }
    </div>
  )
}

export default App
