import React from 'react';
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllTrending from './Components/AllTrending/AllTrending';
import Movies from './Components/Movies/Movies';
import Tv from './Components/Tv/Tv';
import People from './Components/People/People';
import NotFound from './Components/NotFound/NotFound';

export default function App() {
  let routers = createBrowserRouter([
    {path:'/', element:<Layout />, children:[
      {index: true, element: <AllTrending />},
      {path: 'movies', element: <Movies />},
      {path: 'tv', element: <Tv />},
      {path: 'people', element: <People />},
      {path: '*', element: <NotFound />},
    ]},
  ]);

  return (
    <RouterProvider router={routers} /> 
  );
}
