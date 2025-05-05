import React from "react";
import useRoute from "../useRoute/useRoute";
import ShowItem from "../ShowItem/ShowItem";
export default function Movies() {

      let {trendingData} = useRoute("movie")
  
  return (
    <>
    <div className="main">    <h1 className="text-center p-5 mt-5">Trending Movies</h1>
    </div>
    {/* <div className="row py-2">
      {trendingData.map((movie, index) => {
        return (
          <div key={index} className="col-md-3 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: '100%' }}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              className="w-100"
              alt=""
              style={{ height: '350px', objectFit: 'cover' }}
            />
              <div className="card-body">
                <h5 className="card-title">
                  {movie.title}
                </h5>
                <p className="card-text text-muted" style={{ fontSize: '14px', overflow: 'hidden', }}>
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div> */}
    <ShowItem data={trendingData} />
  </>
  

  );
}
