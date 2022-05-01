export default function TestItem(props){


    return(
    <li> 
        <div>
            <h1>{props.title}</h1>
            <h2>{props.id}</h2>
            <button onClick = {props.onClick} value={props.id}>Delete</button>
            
        </div>
    </li>
    )
    
}