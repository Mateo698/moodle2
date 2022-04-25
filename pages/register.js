import RegisterForm from "../components/users/RegisterForm";
export default function register() {

    function onAddUser(enteredUserData){
        console.log(enteredUserData);
    }
    return(
        <RegisterForm onAddUser={onAddUser}/>
    )
  }


