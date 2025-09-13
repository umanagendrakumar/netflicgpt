import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../pages/Login';
import Browser from '../pages/Browser';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browser />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body