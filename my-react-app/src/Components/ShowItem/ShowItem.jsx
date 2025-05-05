import React from "react";

export default function ShowItem({ data  }) {
  return (
    <>
      <div className="row py-2">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="col-md-3 col-sm-6 mb-4 d-flex justify-content-center"
            >
              <div className="card w-100 shadow   bg-body-tertiary rounded ">
                {item.poster_path ? (
                  <img
                    className="w-100"
                    src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                    alt=""
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                ) : item.profile_path ? (
                  <img
                    className="w-100"
                    src={"https://image.tmdb.org/t/p/w500/" + item.profile_path}
                    alt=""
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                ) : (
                  <img
                    className="w-100"
                    src="no-profile-photo.jpg"
                    alt=""
                    style={{ height: "300px" }}
                  />
                )}

                <div className="card-body">
                  <h5 className="card-title">
                    {item.name ? item.name : item.original_title}
                  </h5>
                  <h6 className="text-capitalize text-info">{item.media_type}</h6>
                  <p
                    className="card-text text-muted"
                    style={{ fontSize: "14px", overflow: "hidden" ,height:"130px" }}
                  >
                    {item.overview}{item.popularity}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
