import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Login from './Pages/Login';


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Home /> 
  },
  { 
    path: '/female', 
    element: <ShopCategory category="female" /> 
  },
  { 
    path: '/kids', 
    element: <ShopCategory category="kids" /> 
  },
  { 
    path: '/male', 
    element: <ShopCategory category="male" /> 
  },{
    path: '/cart',
    element: <Cart />
  },{
    path: '/login',
    element: <Login />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
