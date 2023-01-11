import Login from "./pages/Login/Login";
import Register  from "./pages/Register/Register";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Navbar  from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import React, {useState} from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";

function App() {

  const [currentUser, setCurrentUser] = useState(true);

  const Layout = () => {
    return(
      <div>
        <Navbar/>
        <div>
          <Leftbar/>
          <Outlet/>
          <Rightbar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }


  const router = createBrowserRouter([
    {
      path:"/",
      element: (<ProtectedRoute><Layout/></ProtectedRoute>),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile:id",
          element:<Profile/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    }

  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
