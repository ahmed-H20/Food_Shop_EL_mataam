import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/hame/Home";
import Menu from "../pages/shop/Menu";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      //replace "outlet" with "Home" component in Main page 
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path: "/menu",
          element: <Menu/>,
        }
      ]
    },
  ]);

export default router;