import { 
		Route, createBrowserRouter, 
		createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
          
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App
