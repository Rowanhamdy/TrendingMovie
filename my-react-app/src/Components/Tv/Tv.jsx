import React from 'react'
import useRoute from '../useRoute/useRoute';
import ShowItem from '../ShowItem/ShowItem';
export default function Tv() {
    // const [trendingTv , setTrendingTv] = useState([]);

    // async function getTrendingtv(mediaType ,callback) {
    //     let respone = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5def1da8d3f42606d45a4a6df6783e4b`
    //     )
    //     callback(respone.data.results)
    //     console.log(respone.data.results)
    // }

    // useEffect(() =>{
    //     getTrendingtv("tv" ,setTrendingTv)
    // } , [])
    let{trendingData } = useRoute("tv")
  return <>
  <div className='main'><h1 className='p-5 text-center mt-5'>Tv Trending</h1></div> 
  {/* <div className='row py-2 px-2'>
    {trendingData.map((item , index) =>{
        return(
            <div key={index} className='col-md-3 mb-4 d-flex -justify-content-center'>
             <div className='card w-100'>
            <img className="w-100" src={"https://image.tmdb.org/t/p/w500/" +item.poster_path} alt="" style={{ height: '300px', objectFit: 'cover' }}/>
            <div className='card-body'>
            <h5 className="card-title">
                  {item.name}
                </h5>
                <p className="card-text text-muted" style={{ fontSize: '14px', overflow: 'hidden', }}>
                  {item.overview}
                </p>
            </div>
           
                </div>
               
            </div>

        )
    })}
  </div> */}
  <ShowItem data={trendingData}/>
  </>
}
