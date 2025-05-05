import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AllTrending from "./Components/AllTrending/AllTrending";
import Movies from "./Components/Movies/Movies";
import Tv from "./Components/Tv/Tv";
import People from "./Components/People/People";
import NotFound from "./Components/NotFound/NotFound";

export default function App() {
  // let routers = createBrowserRouter([
  //   {path:'/', element:<Layout />, children:[
  //     {index: true, element: <AllTrending />},
  //     {path: 'movies', element: <Movies />},
  //     {path: 'tv', element: <Tv />},
  //     {path: 'people', element: <People />},
  //     {path: '*', element: <NotFound />},
  //   ]},
  // ]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllTrending />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tv" element={<Tv />} />
          <Route path="people" element={<People />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
