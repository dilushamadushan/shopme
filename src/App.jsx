import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Female from './Pages/Female';
import Kids from './Pages/Kids';
import Male from './Pages/Male';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/female', element: <Female /> },
  { path: '/kids', element: <Kids /> },
  { path: '/male', element: <Male /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
