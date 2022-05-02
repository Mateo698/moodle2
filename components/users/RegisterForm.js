import { useRef } from 'react';
import Head from 'next/head'

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
        <div >

    <Head>
    <title>Bootstap</title>
    <link rel="stylesheet"
     href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    </link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css"></link>

      </Head>
         <div className="modal-dialog" role="document" >
        
         <div className="col-xs-12">
               <h1 className="font-italic "  ><em> <strong>Register</strong></em></h1><br></br>
            <label >Username</label><br></br>
            <input type="text" className="form-control"  name="username" onChange={handleChange} placeholder ="User Name "></input><br></br>
            <label>Password</label><br></br>
            <input type="password" className="form-control" name="password" onChange={handleChange}  placeholder ="Password "></input><br></br>
            <input type="radio" name="type" value="Student" onClick={onClickRadio}></input>Student<label></label><br></br>
            <input type="radio" name="type" value="Teacher" onClick={onClickRadio}></input>Teacher<label></label><br></br><br></br>
          
            <button onClick ={registerClick} className = "btn btn-success btn-lg  ">Register</button><button onClick={cancelClick} className = "btn btn-danger btn-lg">Cancel</button>
                    
        </div>
        </div>  
        </div>
    )

}

export default RegisterForm;