import React  from 'react'
import useRoute from '../useRoute/useRoute';
import ShowItem from '../ShowItem/ShowItem';

export default function AllTrending() {
  

    let {trendingData} = useRoute("all")
   
  return <>
  <div className='main'>  <h1 className='text-center p-5  mt-5    '>All Trending </h1>
  </div>
  

  <ShowItem data={trendingData}/>
  </>
}



  // const [AllTrending , setAllTrending ] = useState([]);

    // async function getAll(mediaType , callback) {
    //     let response = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5def1da8d3f42606d45a4a6df6783e4b`);
    //     console.log (response.data.results)
    //     callback(response.data.results)
    // }

    // useEffect(()=>{
    //     getAll("all" ,setAllTrending )
    // },[])





 {/* <div className="row py-2">
    {trendingData.map((item , index) =>{
        return (
            <div key={index} className="col-md-3 col-sm-6 mb-4 d-flex justify-content-center">
                <div className="card w-100 shadow   bg-body-tertiary rounded ">
                <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" +item.poster_path} alt="" style={{ height: '300px', objectFit: 'cover' }}/>
                <div className="card-body">
                <h5 className="card-title">
                  {item.name}{item.original_title}
                </h5>
                <h6 className='text-capitalize text-info'>Type : {item.media_type}</h6>
                <p className="card-text text-muted" style={{ fontSize: '14px', overflow: 'hidden', }}>
                  {item.overview}
                </p>
                </div>
                </div>
            </div>
        )
    })}
  </div> */}