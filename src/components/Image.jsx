export default function FlagImage(props){
    if(props.src !== "") { 
        return( 
            <img 
            className = "FlagImage" 
            src = { props.src }
            onClick = { props.onClickFunction }/> 
            ) 
        }
}