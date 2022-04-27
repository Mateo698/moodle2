import next from 'next';
import {users} from '../../data/users'
export default async function hanlder(req,res){
    const {method , body} = req;
    const username = body.username
    const pass = body.password
    var good = new Boolean(false)
    if(method == 'POST'){
        res.redirect('/register');
        next()
        //res.status(200).json({name: "Pepe"})
    }else{
        res.statu(200).json(users)
    }
   
    
    
}