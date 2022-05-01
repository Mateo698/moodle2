import {db} from '../../utils/database'
export default async function handler(req,res){
    const {method , body} = req;
    const data = await db.query('SELECT * FROM TESTS')
    const tests = data.rows
    var good = true
   
    for (let index = 0; index < tests.length; index++) {
        if(tests[index].id == body.id){
            good = false;
        }
        
    }
    console.log(good)
    if(method == 'POST'){
        if(good){
            await db.query('INSERT INTO TESTS VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32)',
            [body.title,body.id,
                body.question1.statement,body.question1.right,body.question1.option1,body.question1.option2,body.question1.option3,body.question1.option4,
                body.question2.statement,body.question2.right,body.question2.option1,body.question2.option2,body.question2.option3,body.question2.option4,
                body.question3.statement,body.question3.right,body.question3.option1,body.question3.option2,body.question3.option3,body.question3.option4,
                body.question4.statement,body.question4.right,body.question4.option1,body.question4.option2,body.question4.option3,body.question4.option4,
                body.question5.statement,body.question5.right,body.question5.option1,body.question5.option2,body.question5.option3,body.question5.option4
            ])
            
            res.status(200).json({result: "well"})
        }
    }else{
        res.status(404)
    }
}