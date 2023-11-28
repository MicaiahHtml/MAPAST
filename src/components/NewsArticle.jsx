import Button from "./Button.jsx"
import { useState, useEffect } from "react";


export default function NewsArticle(props){
    let title = props.title;
    let body = props.body;
    const [isClosed, setIsClosed] = useState(false);
    const onClickFunction = () => { setIsClosed(true);}

    useEffect(()=>{
        setIsClosed(false);
    }, [props.title, props.body])
    // const onClickFunction = () => { 
    //     title = "";
    //     body = "";
    // }
    if(title !== "" && body !== "" && !isClosed){
        return(
            <div className="greyout">
                <div className = "NewsArticle">
                    <div className="CloseButtonContainer"><Button type = "ExitButton" onClickFunction = {onClickFunction}/></div>
                    <h1> { props.title } </h1>
                    <p> { props.body }</p>
                </div>
            </div>
        );
    }
}