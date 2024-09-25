import * as repository  from '../repository/meberRepository.js'

export const idCheck =  async (req,res) =>{
    const {userId} = req.body
    const checkResult = await repository.idCheck(userId);
    res.json(checkResult)    
}