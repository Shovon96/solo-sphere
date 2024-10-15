import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registation";
import JobDetails from "../pages/JobDetails";
import AddJobs from "../pages/AddJobs";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
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
          element: <JobDetails />,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobDetails/${params.id}`)
        },
        {
          path: '/add-jobs',
          element: <AddJobs />,
        }
      ],
    },
  ]);


  export default router;