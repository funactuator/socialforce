import Login from "./pages/Login/Login";
import Register  from "./pages/Register/Register";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Navbar  from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Layout/>,
    //   children:[
    //     {
    //       path:"/",
    //       element:<Home/>
    //     },
    //     {
    //       path:"/profile:id",
    //       element:<Profile/>
    //     }
    //   ]
    // },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    }

  ]);


  const Layout = () => {
    return(
      <div>
        <Navbar/>
        <div>
          <Leftbar/>
          <Rightbar/>
          <Outlet/>
        </div>
      </div>
    )
  }

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
