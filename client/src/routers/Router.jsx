import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registation";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/registration',
          element: <Registration />
        }
      ]
    },
  ]);


  export default router;