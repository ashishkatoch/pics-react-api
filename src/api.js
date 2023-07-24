import axios from 'axios';
const SearchSplashpi = async(term)=>{
    const response = await axios({
        url: 'https://api.unsplash.com/search/photos?query='+term,
        method: 'get',
        headers: {
            'Authorization': 'Client-ID 1AHWIDCoFT9zPVUxm3TvZ3Vi2ynWIzzR9NAc1nc6vyg',
        }
     })
    
     return response.data.results;
   
};
export default SearchSplashpi;