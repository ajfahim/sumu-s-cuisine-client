
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes/Routes';

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>

      <RouterProvider router={router}></RouterProvider>

    </HelmetProvider>
  );
}

export default App;
