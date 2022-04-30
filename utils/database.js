import {Pool} from 'pg/lib';

var db;

if (!db){
    db = new Pool({
        host: "localhost",
        user: "postgres",
        password: "6986",
        database: "Moodle2",
        port: "5432"
    })
}
 

export {db};