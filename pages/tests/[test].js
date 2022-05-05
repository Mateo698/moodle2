import { useRouter } from "next/router"

 function testHandler({test}){
    let state = {
        q1 : "",
        q2 : "",
        q3 : "",
        q4 : "",
        q5 : ""
    }

    function handleChange(e){
        console.log(e.target.name)
        switch(e.target.name){
            case "q1": state.q1 = e.target.value; break;
            case "q2": state.q2 = e.target.value; break;
            case "q3": state.q3 = e.target.value; break;
            case "q4": state.q4 = e.target.value; break;
            case "q5": state.q5 = e.target.value; break;

        }
        console.log(state)
    }

    let onFinish = async e =>{
        if(state.q1 == "" || state.q2 == "" || state.q3 == "" || state.q4 == "" || state.q5==""){
            alert("Please answer all questions")
        }else{
            var grade = 0
            if(state.q1 == test.q1right){
                grade++
            }
            if(state.q2 == test.q2right){
                grade++
            }
            if(state.q3 == test.q3right){
                grade++
            }
            if(state.q4 == test.q4right){
                grade++
            }
            if(state.q5 == test.q5right){
                grade++
            }
            alert("Your grade is:" + grade)
            location= "/"
        }
    }

    function onCancel(e){

    }

    return(
        <div>
            <h1>{test.title}</h1>
            <h2>{test.id}</h2>
            <div>
                <h2>Pregunta 1</h2>
                <label>{test.q1statement}</label><br/>
                <input type="radio" name = "q1" value = "1" onClick={handleChange}></input><label>{test.q1o1}</label><br/>
                <input type="radio" name = "q1" value = "2" onClick={handleChange}></input><label>{test.q1o2}</label><br/>
                <input type="radio" name = "q1" value = "3" onClick={handleChange}></input><label>{test.q1o3}</label><br/>
                <input type="radio" name = "q1" value = "4" onClick={handleChange}></input><label>{test.q1o4}</label><br/>
            </div>

            <div>
            <h2>Pregunta 2</h2>
                <label>{test.q2statement}</label><br/>
                <input type="radio" name = "q2" value = "1" onClick={handleChange}></input><label>{test.q2o1}</label><br/>
                <input type="radio" name = "q2" value = "2" onClick={handleChange}></input><label>{test.q2o2}</label><br/>
                <input type="radio" name = "q2" value = "3" onClick={handleChange}></input><label>{test.q2o3}</label><br/>
                <input type="radio" name = "q2" value = "4" onClick={handleChange}></input><label>{test.q2o4}</label><br/>
            </div>

            <div>
            <h2>Pregunta 3</h2>
                <label>{test.q3statement}</label><br/>
                <input type="radio" name = "q3" value = "1" onClick={handleChange}></input><label>{test.q3o1}</label><br/>
                <input type="radio" name = "q3" value = "2" onClick={handleChange}></input><label>{test.q3o2}</label><br/>
                <input type="radio" name = "q3" value = "3" onClick={handleChange}></input><label>{test.q3o3}</label><br/>
                <input type="radio" name = "q3" value = "4" onClick={handleChange}></input><label>{test.q3o4}</label><br/>
            </div>

            <div>
            <h2>Pregunta 4</h2>
                <label>{test.q4statement}</label><br/>
                <input type="radio" name = "q4" value = "1" onClick={handleChange}></input><label>{test.q4o1}</label><br/>
                <input type="radio" name = "q4" value = "2" onClick={handleChange}></input><label>{test.q4o2}</label><br/>
                <input type="radio" name = "q4" value = "3" onClick={handleChange}></input><label>{test.q4o3}</label><br/>
                <input type="radio" name = "q4" value = "4" onClick={handleChange}></input><label>{test.q4o4}</label><br/>
            </div>

            <div>
            <h2>Pregunta 5</h2>
                <label>{test.q5statement}</label><br/>
                <input type="radio" name = "q5" value = "1" onClick={handleChange}></input><label>{test.q5o1}</label><br/>
                <input type="radio" name = "q5" value = "2" onClick={handleChange}></input><label>{test.q5o2}</label><br/>
                <input type="radio" name = "q5" value = "3" onClick={handleChange}></input><label>{test.q5o3}</label><br/>
                <input type="radio" name = "q5" value = "4" onClick={handleChange}></input><label>{test.q5o4}</label><br/>
            </div>
            <button onClick={onFinish}>Finish</button><button onClick={onCancel}>Cancel</button>
        </div>
    )
}

testHandler.getInitialProps = async (ctx) => {
    const identifier = ctx.query.test
    const data = { id : identifier }
    let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)}
        const testData = await fetch("http://localhost:3000/api/test",config)
        const test = await testData.json()
        return {test}
}

export default testHandler