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
        console.log(e.target.name)
        switch(e.target.name){
            case "title" : ;break;
            case "id" : ;break;
            case "q1Radio" : ;break;
            case "q2Radio" : ;break;
            case "q3Radio" : ;break;
            case "q4Radio" : ;break;
            case "q5Radio" : ;break;

            /*case "username": state.username = e.target.value;break;
            case "password": state.password = e.target.value;*/
          }
      }


    
    return(
        <div>
            <h1>New test</h1>
            <h2>Test name: </h2><input type="text" name = "title" onChange={handleChange}></input><br/>
            <h2>Test id: </h2><input type="text" name = "id" onChange={handleChange}></input><br/>
            <div>
                <h2>Question 1</h2>
                <label>Statement:</label><br/><textarea onChange={handleChange}></textarea><br/>
                <label>Select the right answer</label><br/>
                <input type="radio" name ="q1Radio" value = "1" onClick={handleChange}></input><label>Answer 1: </label><input type="text"></input><br/>
                <input type="radio" name ="q1Radio" value = "2" onClick={handleChange}></input><label>Answer 2: </label><input type="text"></input><br/>
                <input type="radio" name ="q1Radio" value = "3" onClick={handleChange}></input><label>Answer 3: </label><input type="text"></input><br/>
                <input type="radio" name ="q1Radio" value = "4" onClick={handleChange}></input><label>Answer 4: </label><input type="text"></input><br/>
            </div>

            <div>
                <h2>Question 2</h2>
                <label>Statement:</label><br/><textarea onChange={handleChange}></textarea><br/>
                <label>Select the right answer</label><br/>
                <input type="radio" name ="q2Radio" value = "1" onClick={handleChange}></input><label>Answer 1: </label><input type="text"></input><br/>
                <input type="radio" name ="q2Radio" value = "2" onClick={handleChange}></input><label>Answer 2: </label><input type="text"></input><br/>
                <input type="radio" name ="q2Radio" value = "3" onClick={handleChange}></input><label>Answer 3: </label><input type="text"></input><br/>
                <input type="radio" name ="q2Radio" value = "4" onClick={handleChange}></input><label>Answer 4: </label><input type="text"></input><br/>
            </div>

            <div>
                <h2>Question 3</h2>
                <label>Statement:</label><br/><textarea onChange={handleChange}></textarea><br/>
                <label>Select the right answer</label><br/>
                <input type="radio" name ="q3Radio" value = "1" onClick={handleChange}></input><label>Answer 1: </label><input type="text"></input><br/>
                <input type="radio" name ="q3Radio" value = "2" onClick={handleChange}></input><label>Answer 2: </label><input type="text"></input><br/>
                <input type="radio" name ="q3Radio" value = "3" onClick={handleChange}></input><label>Answer 3: </label><input type="text"></input><br/>
                <input type="radio" name ="q3Radio" value = "4" onClick={handleChange}></input><label>Answer 4: </label><input type="text"></input><br/>
            </div>

            <div>
                <h2>Question 4</h2>
                <label>Statement:</label><br/><textarea onChange={handleChange}></textarea><br/>
                <label>Select the right answer</label><br/>
                <input type="radio" name ="q4Radio" value = "1" onClick={handleChange}></input><label>Answer 1: </label><input type="text"></input><br/>
                <input type="radio" name ="q4Radio" value = "2" onClick={handleChange}></input><label>Answer 2: </label><input type="text"></input><br/>
                <input type="radio" name ="q4Radio" value = "3" onClick={handleChange}></input><label>Answer 3: </label><input type="text"></input><br/>
                <input type="radio" name ="q4Radio" value = "4" onClick={handleChange}></input><label>Answer 4: </label><input type="text"></input><br/>
            </div>

            <div>
                <h2>Question 5</h2>
                <label>Statement:</label><br/><textarea onChange={handleChange}></textarea><br/>
                <label>Select the right answer</label><br/>
                <input type="radio" name ="q5Radio" value = "1" onClick={handleChange}></input><label>Answer 1: </label><input type="text"></input><br/>
                <input type="radio" name ="q5Radio" value = "2" onClick={handleChange}></input><label>Answer 2: </label><input type="text"></input><br/>
                <input type="radio" name ="q5Radio" value = "3" onClick={handleChange}></input><label>Answer 3: </label><input type="text"></input><br/>
                <input type="radio" name ="q5Radio" value = "4" onClick={handleChange}></input><label>Answer 4: </label><input type="text"></input><br/>
            </div>
            <button>Create</button><button>Cancel</button>
        </div>
    )
}