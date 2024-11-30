import * as repository from '../repository/boardRepository.js'

// board controller
export const insert = async (req,res) => {
    const boardFormData = req.body

    const result = await repository.insert(boardFormData)

    res.json(result)
}