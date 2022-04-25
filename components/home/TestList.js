import TestItem from "/components/home/TestItem"

export default function TestList(){
    let testsData = require('/data/tests.json')
    let tests = testsData.tests
    let map = tests.map(test => '<h1>' + test.title + '</h1>')
    console.log(map)

    return(
        <div>
            {tests.map((test)=>(
                <TestItem title={test.title}
                id = {test.id}/>
                ))}
        </div>
    )
}