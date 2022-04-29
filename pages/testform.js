import TestForm from "../components/test/TestForm"
export default function testform(props){
    function onCancel(e){
        var url = "/teachers/"+props.id
        location = url
    }

    return(
        <div>
            <TestForm onCancel={onCancel}/>
        </div>
    )
}