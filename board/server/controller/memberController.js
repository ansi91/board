import * as repository  from '../repository/meberRepository.js'

export const idCheck =  async (req,res) =>{
    const {userId} = req.body
    const checkResult = await repository.idCheck(userId);
    res.json(checkResult)    
}

export const signup = async (req,res) => {
    const formData = req.body
 
    const signupCheck = await repository.signup(formData)
    res.json(signupCheck)
}


export const getLogin = async (req,res) => {
    const {userId, userPass} = req.body;

    const result = await repository.getLogin(userId, userPass)
    res.json(result)

}