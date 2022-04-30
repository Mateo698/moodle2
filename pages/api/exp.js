import {db} from '../../utils/database'
export default async function hanlder(req,res){
    const data = await db.query('SELECT * FROM USERS')
    res.status(200).json(data.rows)
}
