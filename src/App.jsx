import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import RootLayout from './layout/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route path="/female" element={<ShopCategory category="female" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/male" element={<ShopCategory category="male" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
