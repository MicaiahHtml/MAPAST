export default function Button (props) {
    switch (props.type){
    case "SubmitButton":
        return(
            <button className = "SubmitButton" onClick={props.onClickFunction}> What happened here? </button>
        );
    case "ExitButton":
        return(
            <button className="ExitButton" onClick={props.onClickFunction}> X </button>
        )
    case "CustomButton":
        return(
            <button className={props.className} onClick={props.onClickFunction}> {props.customButtonBody} </button>
        )
    default: 
        return( <button> nonfunctional button</button> )
    }
}