export default function TestForm(){
    let state = {
        title : "",
        id : "",
        question1 : {
            statement: "",
            right: "",
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        },
        question2 : {
            statement: "",
            right: "",
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        },
        question3 : {
            statement: "",
            right: "",
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        },
        question4 : {
            statement: "",
            right: "",
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        },
        question5 : {
            statement: "",
            right: "",
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        }
    }

    function handleChange(e){

        switch(e.target.name){
            case "title" : state.title = e.target.value;break;
            case "id" : state.id = e.target.value;break;

            case "state1" : state.question1.statement = e.target.value;break;
            case "state2" : state.question2.statement = e.target.value;break;
            case "state3" : state.question3.statement = e.target.value;break;
            case "state4" : state.question4.statement = e.target.value;break;
            case "state5" : state.question5.statement = e.target.value;break;
            

            case "q1Radio" : state.question1.right = e.target.value;break;
            case "q2Radio" : state.question2.right = e.target.value;break;
            case "q3Radio" : state.question3.right = e.target.value;break;
            case "q4Radio" : state.question4.right = e.target.value;break;
            case "q5Radio" : state.question5.right = e.target.value;break;

            case "q1o1" : state.question1.option1 = e.target.value;break;
            case "q1o2" : state.question1.option2 = e.target.value;break;
            case "q1o3" : state.question1.option3 = e.target.value;break;
            case "q1o4" : state.question1.option4 = e.target.value;break;

            case "q2o1" : state.question2.option1 = e.target.value;break;
            case "q2o2" : state.question2.option2 = e.target.value;break;
            case "q2o3" : state.question2.option3 = e.target.value;break;
            case "q2o4" : state.question2.option4 = e.target.value;break;
            
            case "q3o1" : state.question3.option1 = e.target.value;break;
            case "q3o2" : state.question3.option2 = e.target.value;break;
            case "q3o3" : state.question3.option3 = e.target.value;break;
            case "q3o4" : state.question3.option4 = e.target.value;break;

            case "q4o1" : state.question4.option1 = e.target.value;break;
            case "q4o2" : state.question4.option2 = e.target.value;break;
            case "q4o3" : state.question4.option3 = e.target.value;break;
            case "q4o4" : state.question4.option4 = e.target.value;break;

            case "q5o1" : state.question5.option1 = e.target.value;break;
            case "q5o2" : state.question5.option2 = e.target.value;break;
            case "q5o3" : state.question5.option3 = e.target.value;break;
            case "q5o4" : state.question5.option4 = e.target.value;break;
            

          }
      }


    
    return(
        <div>
            <h1>New test</h1>
            <h2>Test name: </h2><input type="text" name = "title" onChange={handleChange}></input><br/>
            <h2>Test id: </h2><input type="text" name = "id" onChange={handleChange}></input><br/>
            <div>
                <h2>Question 1</h2>
                <label>Statement:</label><br/><textarea onChange={handleChange} name="state1"></textarea><br/>
                <label>Select the right answer</label><br/>
                <input type="radio" name ="q1Radio" value = "1" onClick={handleChange}></input><label>Answer 1: </label><input type="text" onChange={handleChange} name = "q1o1"></input><br/>
                <input type="radio" name ="q1Radio" value = "2" onClick={handleChange}></input><label>Answer 2: </label><input type="text" onChange={handleChange} name = "q1o2"></input><br/>
                <input type="radio" name ="q1Radio" value = "3" onClick={handleChange}></input><label>Answer 3: </label><input type="text" onChange={handleChange} name = "q1o3"></input><br/>
                <input type="radio" name ="q1Radio" value = "4" onClick={handleChange}></input><label>Answer 4: </label><input type="text" onChange={handleChange} name = "q1o4"></input><br/>
            </div>

            <div>
                <h2>Question 2</h2>
                <label>Statement:</label><br/><textarea onChange={handleChange} name="state2"></textarea><br/>
                <label>Select the right answer</label><br/>
                <input type="radio" name ="q2Radio" value = "1" onClick={handleChange}></input><label>Answer 1: </label><input type="text" onChange={handleChange} name = "q2o1"></input><br/>
                <input type="radio" name ="q2Radio" value = "2" onClick={handleChange}></input><label>Answer 2: </label><input type="text" onChange={handleChange} name = "q2o2"></input><br/>
                <input type="radio" name ="q2Radio" value = "3" onClick={handleChange}></input><label>Answer 3: </label><input type="text" onChange={handleChange} name = "q2o3"></input><br/>
                <input type="radio" name ="q2Radio" value = "4" onClick={handleChange}></input><label>Answer 4: </label><input type="text" onChange={handleChange} name = "q2o4"></input><br/>
            </div>

            <div>
                <h2>Question 3</h2>
                <label>Statement:</label><br/><textarea onChange={handleChange} name="state3"></textarea><br/>
                <label>Select the right answer</label><br/>
                <input type="radio" name ="q3Radio" value = "1" onClick={handleChange}></input><label>Answer 1: </label><input type="text" onChange={handleChange} name = "q3o1"></input><br/>
                <input type="radio" name ="q3Radio" value = "2" onClick={handleChange}></input><label>Answer 2: </label><input type="text" onChange={handleChange} name = "q3o2"></input><br/>
                <input type="radio" name ="q3Radio" value = "3" onClick={handleChange}></input><label>Answer 3: </label><input type="text" onChange={handleChange} name = "q3o3"></input><br/>
                <input type="radio" name ="q3Radio" value = "4" onClick={handleChange}></input><label>Answer 4: </label><input type="text" onChange={handleChange} name = "q3o4"></input><br/>
            </div>

            <div>
                <h2>Question 4</h2>
                <label>Statement:</label><br/><textarea onChange={handleChange} name="state4"></textarea><br/>
                <label>Select the right answer</label><br/>
                <input type="radio" name ="q4Radio" value = "1" onClick={handleChange}></input><label>Answer 1: </label><input type="text" onChange={handleChange} name = "q4o1"></input><br/>
                <input type="radio" name ="q4Radio" value = "2" onClick={handleChange}></input><label>Answer 2: </label><input type="text" onChange={handleChange} name = "q4o2"></input><br/>
                <input type="radio" name ="q4Radio" value = "3" onClick={handleChange}></input><label>Answer 3: </label><input type="text" onChange={handleChange} name = "q4o3"></input><br/>
                <input type="radio" name ="q4Radio" value = "4" onClick={handleChange}></input><label>Answer 4: </label><input type="text" onChange={handleChange} name = "q4o4"></input><br/>
            </div>

            <div>
                <h2>Question 5</h2>
                <label>Statement:</label><br/><textarea onChange={handleChange} name="state5"></textarea><br/>
                <label>Select the right answer</label><br/>
                <input type="radio" name ="q5Radio" value = "1" onClick={handleChange}></input><label>Answer 1: </label><input type="text" onChange={handleChange} name = "q5o1"></input><br/>
                <input type="radio" name ="q5Radio" value = "2" onClick={handleChange}></input><label>Answer 2: </label><input type="text" onChange={handleChange} name = "q5o2"></input><br/>
                <input type="radio" name ="q5Radio" value = "3" onClick={handleChange}></input><label>Answer 3: </label><input type="text" onChange={handleChange} name = "q5o3"></input><br/>
                <input type="radio" name ="q5Radio" value = "4" onClick={handleChange}></input><label>Answer 4: </label><input type="text" onChange={handleChange} name = "q5o4"></input><br/>
            </div>
            <button onClick={e => {console.log(state)}}>Create</button><button>Cancel</button>
        </div>
    )
}