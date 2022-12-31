// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(
// //   document.getElementById('root') as HTMLElement
// // );
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


// import React, { useMemo, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';

// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom";
// import "./index.css";

// import Login, { GlobalAuthContext } from './Login';
// import PrivateRoute from './PrivateRoute';

// // const [ctxAuth, setCtxAuth] = useState({
// //   loggedIn: false
// // })
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PrivateRoute />,
//     // errorElement: <Error />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//     // errorElement: <Error />,
//   },

// ]);


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// const [isAuth, setIsAuth] = useState<boolean>(false);


// root.render(

//   <React.StrictMode>
//     <GlobalAuthContext.Provider value={{ isAuth, setIsAuth }}>
//       <RouterProvider router={router} />
//     </GlobalAuthContext.Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";

import Login, { GlobalAuthContext } from './Login';
import PrivateRoute from './PrivateRoute';
import App from './App';

// const [ctxAuth, setCtxAuth] = useState({
//   loggedIn: false
// })



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);






root.render(

  <React.StrictMode>
    {/* <GlobalAuthContext.Provider value={{ isAuth, setIsAuth }}>
      <RouterProvider router={router} />
    </GlobalAuthContext.Provider> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
