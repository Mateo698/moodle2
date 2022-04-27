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
  const typedUsernameRef = useRef()
  const typedPasswordRef = useRef()

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

  const data = fetch("http://localhost:3000/api/login").then((response) => response.json())
  .then((value)=>{
    return value;
  })

  function onClick(e){

    location = "/register"
  }

  let onLoginClick = async e =>{
    
  }

 

  return (
    <div className={styles.container}>
      <h1>Login</h1><br></br>
      <label>Username</label><br></br>
      <input type = "text" ref={typedUsernameRef} onChange={handleChange} name="username"></input><br></br>
      <label>Pass</label><br></br>
      <input type = "password" ref={typedPasswordRef} onChange={handleChange} name="password"></input><br></br>
      <label id="wrong" hidden>Wrong username or password</label><br></br>
      <button onClick={onLoginClick}>Login</button><button onClick={onClick}>Register</button><br></br>
    </div>
  )
}
