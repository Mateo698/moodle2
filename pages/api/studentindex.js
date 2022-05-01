import {db} from '../../utils/database'
export default async function handler(req,res){
    const {method , body} = req;
    const data = await db.query('SELECT * FROM TESTS')
    const tests = data.rows
    if(method == 'POST'){
        res.status(200).json(tests)
    }else{
        res.status(404)
    }
}