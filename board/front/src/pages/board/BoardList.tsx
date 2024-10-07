import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios";

interface Board{
    rno : number,
    bid : number,
    bhits : number,
    btitle: string,
    bdate:string
}

export default function BoardList(){
    const [boardList, setBoardList] = useState<Board[]>([])
    useEffect(()=>{
        const url = 'http://localhost:8080/board/list';
        axios({
          method : 'get',
          url : url
        })
          .then((result) => setBoardList(result.data))
          .catch(error => console.log(error));
      }, []);
    return(
        <div className="board-content">
            <h1>게시판</h1>
            <table border={1}>
                <tr>
                    <td colSpan={4}>
                        <Link to="/board/new">
                            <button type="button">글쓰기</button>
                        </Link>    
                     </td>
                </tr>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>조회수</th>
                    <th>등록일자</th>
                </tr>
                {boardList.map((board) => (
                    <tr>
                        <td>{board.rno}</td>
                        <td><Link to={`/board/${board.bid}/${board.rno}`}>{board.btitle}</Link></td>
                        <td>{board.bhits}</td>
                        <td>{board.bdate}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}