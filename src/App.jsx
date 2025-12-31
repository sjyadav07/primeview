import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Movie from "./components/ui/Movie";
import Contact, { handleFormData } from "./components/ui/Contact";
import ErrorPage from "./components/ui/ErrorPage";
import GetApiData from "./api/GetApiData";
import Loading from "./components/layout/Loading";
import MovieDetails from "./components/ui/MovieDetails";
import individualMovieDetails from "./api/IndividualMovieDetails";
import GetHomePageData from "./api/GetHomePageData";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      //for error show in react mosteasiest task only you can create a one error page or component and in app
      // component use "errorElement" and just above children or below the "applayout" and now is ready when someone
      // enter something wrong or got something wrong url then this error message exicute
      //--> to show error message one more hook is "useRouteError()" and when we use this it gives more information about the error (like status code, error details etc..)
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: GetHomePageData,
        },

        {
          path: "/home",
          element: <Home />,
          loader: GetHomePageData,
        },
        // {
        //   path: "/loading",
        //   element: <Loading />,
        // },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movie />,
          loader: GetApiData, //this is the one more "props" which we got in the react-router-dom which help to fetch
          // the data of api easliy and this is the function name inside that we kept our "fetch(api-url)" now go in
          // this movie component page and there use a one more react-router-dom hook to get the data from api is "useLoaderData()" so it print the data
        },
        // ==> here we create a one more component for a dynamic "route" page which help in dynamic page data access
        {
          path: "/movies/:id",
          element: <MovieDetails />,
          loader: individualMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: handleFormData, //==> so yeha pe hume vo function dena hai jo form ka data handle kar rha hai
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
