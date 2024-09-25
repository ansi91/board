import {db} from '../db/database_mysql80.js'


export const idCheck = (userId) =>{

    const sql = `SELECT count(user_id) from board_member where user_id  = ?  `

    return db.execute(sql,[userId])
             .then((result => result[0][0]))
    

}