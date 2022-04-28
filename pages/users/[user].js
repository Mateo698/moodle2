import { useRouter } from "next/router"

export default function hanlder(){
    const router = useRouter()
    const data = router.query
    let state = {
        
    }

    let onLoad = async e =>{
        let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: ''
      }
        const testData = await fetch("http://localhost:3000/api/studentindex",config)
        const r = await testData.json()
        console.log(r)
    }

    return(
        <div >
            <h1 onLoad={onLoad}>Welcome: {data.user}</h1>
            
        </div>
    )
}

hanlder.getInitialProps = async (ctx) => {
    
}