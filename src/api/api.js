import axios from "axios";
const URL= "https://api.themoviedb.org/3";
const API_KEY ="04b1b73917e2ecc8162793b2b98200c2";

const endpoints ={
    originals:"/discover/tv",
    trending:"/trending/all/week",
    now_playing:"/movie/popular",
    popular:"/movie/popular",
    top_rated:"/movie/top_rated",
    upcoming:"/movie/upcoming",
};

export const fetchData =(param)=>
{
    return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`)
}