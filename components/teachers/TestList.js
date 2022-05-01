import TestItem from "/components/teachers/TestItem"
export default function TestList(props){
    let tests = props.data


    function onClick(e){
        console.log(e.target.value)
    }


    return(
        <div>
            {tests.map((test)=>(
                <TestItem title={test.title}
                id = {test.id}
                onClick = {onClick}/>
            ))}
        </div>
    )
}