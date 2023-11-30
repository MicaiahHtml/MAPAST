//countryCode, apiKey
//returns array [title, body]
//import { useEffect } from "react";



const getNews = async( countryName, countryCode, apiKey, signal ) => {
    try{
        // make fetch request and store response
        const url = 'https://api.currentsapi.services/v1/latest-news?' +
        'country=' + countryCode + '&' +
        'apiKey=' + apiKey;
        console.log('the url is: ' + url )
        const response = await fetch(url, signal);
        // Parse JSON response into a javascript object
        const data = await response.json();
        return data.news[0]; //change to random
        
    } catch(error) {
        console.log("Error from getNews():" + error);
        return {title: "Nothing found...", description: "It's kinda quiet here in " + countryName + "..."};
    };
    
};

export default getNews;

    

