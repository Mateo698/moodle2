export default function TestItem(props){

    function onClick(e){
        var url = "/tests/" + props.id
        loctaion = url
    }

    return(
    <li> 
        <div>
            <h1>{props.title}</h1><br></br>
            <h1>{props.id}</h1>
        </div>
        <div>
            <button >Answer</button>
        </div>
    </li>
    )
    
}