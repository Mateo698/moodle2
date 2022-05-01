import TestItem from "/components/home/TestItem"

export default function TestList(props){
    let tests = props.testsData
    let map = tests.map(test => '<h1>' + test.title + '</h1>')

    return(
        <div>
            {tests.map((test)=>(
                <TestItem title={test.title}
                id = {test.id}/>
            ))}
        </div>
    )
}