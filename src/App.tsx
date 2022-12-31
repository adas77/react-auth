import React, { useState } from 'react';
import logo from './logo.svg';
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
      // errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
      // errorElement: <Error />,
    },

  ]);

  return (
    <GlobalAuthContext.Provider value={{ isAuth, setIsAuth }}>
      <RouterProvider router={router} />
    </GlobalAuthContext.Provider>
  );
}

export default App;
