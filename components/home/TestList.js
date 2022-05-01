import TestItem from "/components/home/TestItem"

export default function TestList(props){
    let tests = props.testsData

    return(
        <div>
            {tests.map((test)=>(
                <TestItem title={test.title}
                id = {test.id}/>
            ))}
        </div>
    )
}