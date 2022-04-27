import {users} from '../../data/users'
export default async function hanlder(req,res){

    res.status(200).json(users)
}