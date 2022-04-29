import {tests} from '../../data/tests'
export default async function handler(req,res){
    const {method , body} = req;

    if(method == 'POST'){
        res.status(200).json(tests)
    }else{
        res.status(404)
    }
}