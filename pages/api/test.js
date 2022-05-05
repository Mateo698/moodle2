import {db} from '../../utils/database'
export default async function hanlder(req,res){
    const {method , body} = req;
    const data = await db.query('SELECT * FROM TESTS WHERE ID = $1',[body.id])
    res.status(200).json(data.rows[0])
}