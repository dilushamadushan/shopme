import { 
		Route, createBrowserRouter, 
		createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import AllProduct from './pages/AllProduct'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          <Route index element = {<Dashboard />} />
          <Route path='dash' element={<Dashboard />} />
          <Route path='add' element = {<AddProduct />} />
          <Route path='all' element = {<AllProduct />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App
