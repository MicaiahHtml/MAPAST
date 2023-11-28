
import { useState, useEffect, useCallback } from 'react';
import WorldMap from "react-svg-worldmap";
import data from "./scripts/data.jsx"
import getNews from './scripts/getNews.jsx';
import NewsArticle from './components/NewsArticle.jsx'
import './App.css';

function App() {
  const [curCtry, setCurCtry] = useState({cName: "none", iso: "none"});
  const [curArticle, setCurArticle] = useState({title: "", body: ""});
  const [isClicked, setIsClicked] = useState(false);
  
  const apiKey = "rR0xMXUAKE2U8MRi9uCrJA0eFzOO0MO2pWp6oasiD62rQ_IY";
  //console.log(data);
  

  useEffect(() => {
    //alert(curCtry.iso);
    if(isClicked){
      const fetchExpire = setTimeout(()=>{
        setCurArticle({title: String("Nothing found..."), body: String("It's kinda quiet in " + curCtry.cName + "...")})
      }, 10000);
      console.log(fetchExpire);
      getNews(curCtry.iso, apiKey, curCtry.cName).then((t) => {
        setCurArticle({title: String(t.title), body: String(t.description)});
        clearTimeout(fetchExpire);
        });
    }else{
      setCurArticle({title: "", body: ""})
    }
  }, [curCtry.iso]);
  
  const clickAction =
    ({ countryName, countryCode}) => {
      setCurCtry( {cName: String(countryName), iso: String(countryCode)} );
      setIsClicked(true);
      //set api giphy image to the first gif that comes up in giphy
    };

  return (
    <div className = "mainBox">
     <h1>Hello World</h1>
     <WorldMap
        className = "WorldMap"
        backgroundColor='transparent'
        color="white"
        size="lg"
        data={data}
        onClickFunction={clickAction}
      />
      <NewsArticle title = {curArticle.title} body = {curArticle.body}/>
    </div>
    /*add loading thing here*/
    /*add GIphy image here with a url from an api*/
  )
}

export default App
