import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/hame/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRoter/PrivateRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path: "/menu",
          element: <PrivateRouter><Menu /></PrivateRouter>,
        }
      ]
    },
    {
      path: "/signup",
      element: <Signup/>
    }
  ]);

export default router;