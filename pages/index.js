import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const typedUsernameRef = useRef()
  const typedPasswordRef = useRef()

  let usersData = require('/data/users.json')
  let users = usersData.users

  function onClick(e){
    location = "/register"
  }

  function loginClick(e){
    var x = new Boolean(false)
    const username = typedUsernameRef.current.value
    const pass = typedPasswordRef.current.value
    for (let index = 0; index < users.length; index++) {
      if(users[index].username == username){
        if(users[index].password == pass){
          location = "/logedtest"
        }else{
          let element = document.getElementById("wrong")
          element.removeAttribute("hidden")
        }
      }
    }
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1><br></br>
      <label>Username</label><br></br>
      <input type = "text" ref={typedUsernameRef}></input><br></br>
      <label>Pass</label><br></br>
      <input type = "password" ref={typedPasswordRef}></input><br></br>
      <label id="wrong" hidden>Wrong username or password</label><br></br>
      <button onClick = {loginClick}>Login</button><button onClick={onClick}>Register</button>
    </div>
  )
}
