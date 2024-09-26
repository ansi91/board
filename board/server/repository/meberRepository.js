import {db} from '../db/database_mysql80.js'
import bcryfpt from 'bcrypt' 

export const idCheck = (userId) =>{

    const sql = `SELECT count(user_id) as cnt from board_member where user_id  = ?  `

    return db.execute(sql,[userId])
             .then((result => result[0][0]))
    

}

export const signup = async (formData) => {
    let result_rows = 0;
    
    
    let phoneNumber1 = formData.phoneNumber1
    let phoneNumber2 = ''
    let phoneNumber3 = ''

    if(formData.phoneNumber2.length === 8){
       phoneNumber2  = formData.phoneNumber2.slice(0,4)
       phoneNumber3 =  formData.phoneNumber2.slice(4)

    }else{
        phoneNumber2 = formData.phoneNumber2.slice(0,3)
        phoneNumber3= formData.phoneNumber2.slice(3)
    }

    const params = [
            formData.userId,
            bcryfpt.hashSync(formData.userPass, 7),
            formData.userName,
            formData.emailId,
            formData.emailDomain,
            phoneNumber1.concat('-',phoneNumber2,'-',phoneNumber3),
            formData.zipcode,
            formData.address.concat(' ', formData.detailAddress)   
        ] 

        const sql = `insert into board_member(user_id, 
                                              user_pass,
                                              user_name,
                                              email_id,
                                              email_domain,
                                              phone,
                                              zipcode,
                                              address,
                                              signup_date) values(?, ?, ?, ?, ?, ?, ?, ?, now())`

        try {
            const [result] = await db.execute(sql,params)
            result_rows = result.affectedRows 
        } catch (error) {
            console.log(error);
            
        }


    return {"cnt" : result_rows}
} 