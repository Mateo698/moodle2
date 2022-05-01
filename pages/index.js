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

      <h1 class="font-italic">Login</h1><br></br>
     <label>Username</label><br></br>
      <input type = "text"  onChange={handleChange} name="username"></input><br></br>
      <label>Pass</label><br></br>
      <input type = "password"  onChange={handleChange} name="password"></input><br></br>
      <label id="wrong" hidden>Wrong username or password</label><br></br>
      <button onClick={onLoginClick}className = "btn btn-primary btn-lg"  >Login</button><button onClick={onClick} className = "btn btn-success btn-lg" > <i className="fa-solid fa-baby"></i>Register</button><br></br>
    </div>
  )
}
