import next from 'next';
import {users} from '../../data/users'
export default async function hanlder(req,res){
    const {method , body} = req;
    const username = body.username
    const pass = body.password
    var access = "no"
    var localUser = { "username" : "", "type" : ""}
    for (let i = 0; i < users.length; i++) {
        if(users[i].username == username){
            if(users[i].password == pass){
                access = "yes"
                localUser = users[i]
            }
        }
    }

    if(method == 'POST'){
        res.status(200).json({login: access, username: localUser.username,type: localUser.type })
    }else{
        res.status(200).json(users)
    }
   
    
    
}