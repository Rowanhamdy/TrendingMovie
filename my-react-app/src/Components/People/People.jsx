import React from 'react'
import useRoute from '../useRoute/useRoute';
import ShowItem from '../ShowItem/ShowItem';

export default function People() {
    // const [people , setPeople] = useState([]);

    // async function getPeople(mediaType , callback) {
    //     let response = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5def1da8d3f42606d45a4a6df6783e4b`);
    //     console.log (response.data.results)
    //     callback(response.data.results)
    // }

    // useEffect(()=>{
    //     getPeople("person" ,setPeople)
    // },[])
    let{trendingData} = useRoute("person")
    console.log(trendingData)
  return <>
  <div className='main'><h1 className='text-center p-5 mt-5   '>People Trending </h1></div> 
  {/* <div className="row py-2">
    {trendingData.map((item , index) =>{
        return (
            <div key={index} className="col-md-3 col-sm-6 mb-4 d-flex justify-content-center">
                <div className="card w-100 shadow   bg-body-tertiary rounded ">
                    {item.profile_path ? <img className='w-100' src={"https://image.tmdb.org/t/p/w500/" + item.profile_path} alt="" style={{ height: '300px', objectFit: 'cover' }}/>:
                    <img className='w-100' src="no-profile-photo.jpg" alt="" style={{ height: '300px'}}/>
}
                <div className="card-body">
                <h5 className="card-title">
                  {item.name}{item.original_title}
                </h5>
                <h6 className='text-capitalize text-info'>Type : {item.known_for_department}</h6>
                <p className="card-text text-muted" style={{ fontSize: '14px', overflow: 'hidden', }}>
                  {item.popularity}
                </p>
                </div>
                </div>
            </div>
        )
    })}
  </div> */}
  <ShowItem data={trendingData} />
  </>
}
