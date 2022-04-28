import { useRef } from 'react';

function RegisterForm(props){

    let state = {
        username : "",
        password : "",
        type: ""
    }

    function handleChange(e){
        switch(e.target.name){
          case "username": state.username = e.target.value;break;
          case "password": state.password = e.target.value;
        }
      }

    let registerClick = async e =>{
        let config = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }

        if(state.password == "" || state.username == "" || state.type == ""){
            console.log(state)
            alert("Please fill all the information")
        }else{
            const data = await fetch("http://localhost:3000/api/register",config)
            const r = await data.json()
            console.log(r.result)
            if(r.result == "done"){
                location = "/"
            }else{
                alert("Username already taken")
            }
        }
    }

    function cancelClick(e){
        location = "/"
    }

    function onClickRadio(e){
        state.type = e.target.value
    }

    return(
        <div>
            <h1>Register</h1><br></br>
            <label>Username</label><br></br>
            <input type="text" name="username" onChange={handleChange}></input><br></br>
            <label>Password</label><br></br>
            <input type="password" name="password" onChange={handleChange}></input><br></br>
            <input type="radio" name="type" value="Student" onClick={onClickRadio}></input>Student<label></label><br></br>
            <input type="radio" name="type" value="Teacher" onClick={onClickRadio}></input><label>Teacher</label><br></br>
            <button onClick ={registerClick}>Register</button><button onClick={cancelClick}>Cancel</button>
        </div>
    )

}

export default RegisterForm;