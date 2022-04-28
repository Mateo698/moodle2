export default function TestItem(props){

    function onClick(e){
        var url = "/tests/" + props.id
        location = url
    }

    return(
    <li> 
        <div>
            <h1>{props.title}</h1>
            <h2>{props.id}</h2>
            <button onClick = {onClick}>Answer</button>
            
        </div>
    </li>
    )
    
}