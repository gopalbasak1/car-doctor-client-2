import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/services',
            element: <Services/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'sign-up',
          element: <SignUp/>
        }

      ]
    },
  ]);

export default Routes;