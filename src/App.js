import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from './Components/Create/Create';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import NotFind from './Components/NotFind/NotFind';


function App() {

  let routers = createBrowserRouter([
    {
      path: "", element: <Root />, children: [
        { index: true, element: <Home /> },
        { path: "create", element: <Create /> },
        { path: "profile", element: <Profile /> },
        { path: "settings", element: <Settings /> },



        { path: "*", element: <NotFind /> },
      ]
    }
  ]);





  return (
    < >
      <RouterProvider router={routers}></RouterProvider>
    </>
  );

}

export default App;
