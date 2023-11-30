//countryCode, apiKey
//returns array [title, body]
//import { useEffect } from "react";



const getNews = async( countryName, countryCode, apiKey ) => {
    try{
        // make fetch request and store response
        const url = 'https://api.currentsapi.services/v1/latest-news?' +
        'country=' + countryCode + '&' +
        'apiKey=' + apiKey;
        console.log('the url is: ' + url )
        const response = await fetch(url);
        // Parse JSON response into a javascript object
        const data = await response.json();
        return data.news[0]; //change to random
        
    } catch(error) {
        console.log(error);
        return {title: "Nothing found...", body: "It's kinda quiet in " + countryName + "..."};
    };
    
};

export default getNews;

    

