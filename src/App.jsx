
import { useState, useEffect, useCallback } from 'react';
import WorldMap from "react-svg-worldmap";
import FlagImage from './components/Image.jsx';
import data from "./scripts/data.jsx"
import getNews from './scripts/getNews.jsx';
import getGif from './scripts/getGif.jsx';
import NewsArticle from './components/NewsArticle.jsx'
import './App.css';

function App() {
  const [curCtry, setCurCtry] = useState({cName: "none", iso: "none"});
  const [curArticle, setCurArticle] = useState({title: "", body: ""});
  const [curData, setCurData] = useState([]);
  const [curImage, setCurImage] = useState("");
  const [curImageIndex, setCurImageIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  
  const controller = new AbortController();
  const { signal } = controller;

  const apiKey = ["rR0xMXUAKE2U8MRi9uCrJA0eFzOO0MO2pWp6oasiD62rQ_IY", "Zzvept4l0H9lBQMoUjzwHg7cN4YND0Ia"];
  //console.log(data);
  

  useEffect(() => {
    //alert(curCtry.iso);
    if(isClicked){
      const fetchExpire = setTimeout(()=>{
        controller.abort();
        setCurArticle({title: String("Nothing found..."), body: String("It's kinda quiet here in " + curCtry.cName + "...")})
        
      }, 10000);
      console.log(fetchExpire);
      getNews(curCtry.cName, curCtry.iso, apiKey[0], { signal }).then((t) => {
        setCurArticle({title: String(t.title), body: String(t.description)});
        clearTimeout(fetchExpire);
        });
        getGif(curCtry.cName, apiKey[1], curImageIndex).then((t)=> {
          setCurData(t);
          console.log(t.length)
          setCurImage(t[curImageIndex].images.original.url);
        })
    }else{
      setCurArticle({title: "", body: ""})
      setCurImage("");
    }
  }, [curCtry.iso]);
  
  const clickAction =
    ({ countryName, countryCode}) => {
      setCurImageIndex(0);
      setCurCtry( {cName: String(countryName), iso: String(countryCode)} );
      setCurArticle({title: "", body: ""});
      setIsClicked(true);
      //set api giphy image to the first gif that comes up in giphy
    };
  
  const incrementImageIndex = () => {
    //alert(`curImageIndex = ${curImageIndex} && max = ${curMax}`);
    (curImageIndex < curData.length) ? setCurImageIndex(curImageIndex + 1) : setCurImageIndex(0);
    setCurImage(curData[curImageIndex].images.original.url);
  };

  return (
    <div className = "mainBox">
     <h1 id = "title">MAPAST!</h1>
     <div className="innerContent">
      <p id = "instructions">Click on a country to get its latest news. It might take a moment to load; feel free to click on the gif to the right while it does 🙂</p>
      <WorldMap
          className = "WorldMap"
          backgroundColor='transparent'
          color="white"
          size="lg"
          data={data}
          onClickFunction={clickAction}
        />
        <FlagImage src = {curImage} onClickFunction = {incrementImageIndex}/>
      </div>
      <NewsArticle title = {curArticle.title} body = {curArticle.body}/>
    </div>
    /*add loading thing here*/
    /*add GIphy image here with a url from an api*/
  )
}

export default App;
