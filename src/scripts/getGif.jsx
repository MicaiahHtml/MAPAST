const getGif = async( q, apiKey, index ) => {
    let searchTerm = q.replace(/ /g,"+") + "+flag";
    if(searchTerm == "south+sudan+flag"){
        searchTerm = "sudan+flag";
    }else if(searchTerm == "niger+flag"){
        searchTerm = "desert";
    }
    try{
        // make fetch request and store response
        const url = 'https://api.giphy.com/v1/gifs/search?' +
        'q=' + searchTerm + '&' +
        'api_key=' + apiKey;
        console.log('the giphy url is: ' + url )
        const response = await fetch(url);
        // Parse JSON response into a javascript object
        const data = await response.json();
        //return [data.data.length, data.data[index].images.original.url];
        return data.data;
        
    } catch(error) {
        console.log(error);
        return "";
    };
}

export default getGif;