import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registation";
import JobDetails from "../pages/JobDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/registration',
          element: <Registration />
        },
        {
          path: '/jobDetails/:id',
          element: <JobDetails />
        }
      ]
    },
  ]);


  export default router;