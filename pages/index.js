/* eslint-disable react/no-unknown-property */
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import TestRadio from '../components/TestRadio'
import styles from '../styles/Home.module.css'


let state = {
  username : "",
  password : ""
}

export default function Home() {
 

  function handleChange(e){
    switch(e.target.name){
      case "username": state.username = e.target.value;break;
      case "password": state.password = e.target.value;
    }
  }

  let handleSubmit = async e =>{
    const users = await data;
    console.log(users)
  }

 

  

  function onClick(e){

    location = "/register"
  }

  let onLoginClick = async e =>{
    let config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    }

    const data = await fetch("http://localhost:3000/api/login",config)
    const r = await data.json()

    if(r.login == "yes"){
      if(r.type == "Student"){
        const url = "/users/"  + r.username 
        location = url
      }else{
        const url = "/teachers/"  + r.username 
        location = url
      }
      
    }else{
      document.getElementById("wrong").removeAttribute("hidden")
    }
  }

 

  return (
    <div className={styles.container}>
      <Head>
    <title>Bootstap</title>
    <link rel="stylesheet"
     href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</link>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css"></link>

      </Head>

      <h1 class="font-italic"><em> <strong>Login</strong></em></h1><br></br>
     
     <div class="col-xs-4">
     <label lass="float-right">Username</label><br></br>
     <div class="input-group">
     <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
      <input type = "text" class="form-control"  onChange={handleChange}  name="username" placeholder="User Name" ></input><br></br>
      </div>
      <label>Pass</label><br></br>
      <div class="input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
      <input type = "password" class="form-control"   onChange={handleChange} name="password" placeholder="Password"></input><br></br>
      </div>
      <label id="wrong" hidden>Wrong username or password</label><br></br>
      <button onClick={onLoginClick} className = "btn btn-primary btn-lg"  ><i class="glyphicon glyphicon-globe"></i>Login</button> <button onClick={onClick} className = "btn btn-success btn-lg" > <i class="glyphicon glyphicon-user"></i>Register</button><br></br>
      </div>
      
    </div>
  )
}
