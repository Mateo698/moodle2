function exp({users}){

    console.log(users)

    return(
        <div>
            <h1>Hey</h1>
        </div>
    )
}

exp.getInitialProps =  async (ctx) => {
    let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: ''}
    
      
    
        const testData = await fetch("http://localhost:3000/api/exp",config)
        const r = await testData.json()
        return {users : r}
        
}

export default exp