import axios from 'axios';
import React, { useEffect, useState } from 'react'

// custome hooks
export default function useRoute(mediaType) {
    const[trendingData ,setTrendingData] = useState([]);
    async function getTrending(mediaType) {
        let response = await axios.get( `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=5def1da8d3f42606d45a4a6df6783e4b`);
        setTrendingData(response.data.results)
    }
    useEffect(() =>{
        getTrending(mediaType);
    },[mediaType])
    
    return{trendingData}
 
}
