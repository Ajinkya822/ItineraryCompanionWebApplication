import axios from 'axios';








export const getPlacesData= async(type,sw,ne)=>{
    try{
        const {data:{ data } }=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
    params:{
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        
        
    },
    headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'e9515250e6mshcce03d2595e2c0fp189c7bjsnc75f4311fed8'
     },
});
    
        return data;
    }
    catch(error){
        console.log(error);
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
        params: { lon: lng, lat:lat, },
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': 'e9515250e6mshcce03d2595e2c0fp189c7bjsnc75f4311fed8'
  },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};













