import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/hame/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      //replace "outlet" with "Home" component in Main page 
      children:[
        {
          path:"/",
          element: <Home/>
        }
      ]
    },
  ]);

export default router;