import { useRouter } from "next/router"
import TestList from "../../components/home/TestList"

function userIndex({tests}){
    const router = useRouter()
    const data = router.query

    let state = {
        
    }

    return(
        <div >
            <h1>Welcome: {data.user}</h1><br></br>
        
            <TestList/>
        
    )
        </div>
    )
}

userIndex.getInitialProps = async (ctx) => {
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

export default userIndex