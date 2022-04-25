function TestItem(props){

    function onClick(e){
        var url = "/tests/" + props.id
        loctaion = url
    }
$
    return(
    <li> 
        <div>
            <h1>props.title</h1>
        </div>
        <div>
            <button onClick = {onClick}>Answer</button>
        </div>
    </li>
    )
    
}