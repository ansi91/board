import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export function BoardWrite() {
    const navigate = useNavigate();



    //DB연동
    const [boardFormData, setBoardFormData] = useState({
        btitle: "",
        bcontent : ""
    })

    //폼데이터 입력
    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setBoardFormData({...boardFormData, [name]:value})
    }


    const handleWriteSubmit = () => {
        const url = "http://127.0.0.1:8080/board/new"
        axios({
            method:"post",
            url: url,
            data:boardFormData
        })
        .then(result => {
            if(result.data.cnt === 1){
                navigate("/board")
            }
        })
        .catch(error => console.log(error));
    }
    
    const handleWriteReset = () => {
        setBoardFormData({
            btitle:"",
            bcontent:""
        })
    }

    const handleNavigate = () => {
        navigate("/board")
    }


    return(
        <div>
            <h1>board write</h1>
            <table style={{border:'1px solid black'}}>
                <tr>
                    <th>제목</th>
                    <td>
                        <input type="text"
                               name="btitle"
                               value={boardFormData.btitle}
                               onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td>
                        <textarea name="bcontent"
                                value={boardFormData.bcontent}
                                onChange={handleChange}>
                        </textarea>
                    </td>
                    </tr>
                    <tr>

                    <td colSpan={2}>
                        <button type="button"
                                onClick={handleWriteSubmit}>
                                등록완료 
                        </button>

                        <button type="button"
                                onClick={handleWriteReset}>
                                다시쓰기            
                       </button>
                       <button type="button"
                               onClick={handleNavigate}>
                                목록으로
                       </button>
                    </td>
                </tr>
            </table>
        </div>
    )
}