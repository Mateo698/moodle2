import {users} from '../../data/users'
export default async function handler(req,res){
    function check(username,type){
        var error = "no"
        for (let index = 0; index < users.length; index++) {
            if(users[index].username == username){
                if(users[index].type == type){
                    error = "yes"
                }
            }
        }
        return error;
    }

    const {method, body} = req
    if(method == 'POST'){
        var error = check(body.username,body.type)
        if(error == "no"){
            var fs = require('fs')
            var newUser = {
                "username" : body.username,
                "password" : body.password,
                "type" : body.type 
            }
            users.push(newUser)
            const newUsers = { "users" : users}
            let jsonData = JSON.stringify(newUsers)
           
            fs.writeFile('./data/users.json',jsonData,(error)=>{if(error){console.log(error)}})
            res.status(200).json({result : "done"})
        }else{
            res.status(200).json({result : "error"})
        }
    }else{
        res.status(404)
    }
}