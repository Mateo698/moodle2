import TestItem from "/components/teachers/TestItem"
export default function TestList(props){
    let tests = props.data
    
    let state = {
        deletId : ""
    }

    function onClick(e){
        state.deletId = e.target.value
        console.log(state.deletId)
        onDelete
    }

    let onDelete = async e =>{
        let config = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)}
        const result = await fetch("http://localhost:3000/api/delete",config) 
        console
        location.reload()     
    }


    return(
        <div>
            {tests.map((test)=>(
                <TestItem title={test.title}
                id = {test.id}/>
            ))}
        </div>
    )
}