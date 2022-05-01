import {db} from '../../utils/database'
export default async function handler(req,res){
    const data = await db.query('SELECT * FROM USERS')
    const users = data.rows
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
           
            db.query('INSERT INTO USERS (USERNAME,PASSWORD,TYPE) VALUES ($1,$2,$3)',[body.username,body.password,body.type])
            
            res.status(200).json({result : "done"})
        }else{
            res.status(200).json({result : "error"})
        }
    }else{
        res.status(404)
    }
}