import { useRef } from 'react';

function RegisterForm(props){
    const usernameRef = useRef()
    const passwordRef = useRef();

    function registerClick(e){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        const userData = {
            username: username,
            password: password
        };

        props.onAddUser(userData);
    }

    function cancelClick(e){
        location = "/"
    }

    return(
        <div>
            <h1>Register</h1><br></br>
            <label>Username</label><br></br>
            <input type="text" ref={usernameRef}></input><br></br>
            <label>Password</label><br></br>
            <input type="text" ref={passwordRef}></input><br></br>
            <button onClick ={registerClick}>Register</button><button onClick={cancelClick}>Cancel</button>
        </div>
    )

}

export default RegisterForm;