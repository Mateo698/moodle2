import TestList from "../../components/teachers/TestList"
import { useRouter } from "next/router"
function teacherIndex({tests}){
    const router = useRouter()
    const data = router.query

    function onCreateClick(e){
        location = "/testform"
    }

    return(
        <div>
            <h1>Teacher: {data.teacher}</h1>
            <div>
                <h2>Create new tests</h2><button onClick={onCreateClick}>Create</button>
            </div>
            <div>
                <TestList data = {tests}/>
            </div>
        </div>
    )
}

teacherIndex.getInitialProps = async (ctx) => {
    let config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: ''}
  
    
  
      const testData = await fetch("http://localhost:3000/api/studentindex",config)
      const r = await testData.json()
      return {tests : r}
    
  }

  export default teacherIndex