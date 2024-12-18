import {db} from '../db/database_mysql80.js'


//board Repository
export const insert = async(boardFormData) => {
    let result_rows = 0;

    const sql = `insert into board(btitle,bcontent,bhit,bdate) values(?, ?, 0, now())` 

    try{
        const [result] = await db.execute(sql, [
                                                boardFormData.btitle,
                                                boardFormData.bcontent]);
        result_rows = result.affectedRows;
    }catch(error){
        console.log(error);
    }
    return {cnt : result_rows}
}