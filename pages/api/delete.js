import {db} from '../../utils/database'
export default async function hanlder(req,res){
    const {method , body} = req;
    const data = await db.query('DELETE FROM TESTS WHERE ID = $1',[body.deleteId])
    res.status(200).json({result: "done"})
    
}
