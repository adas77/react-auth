import React, { useState } from 'react';
import './App.css';
import Login, { GlobalAuthContext } from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute />,
    },
    {
      path: "/login",
      element: <Login />,
    },

  ]);

  return (
    <GlobalAuthContext.Provider value={{ isAuth, setIsAuth }}>
      <RouterProvider router={router} />
    </GlobalAuthContext.Provider>
  );
}

export default App;
