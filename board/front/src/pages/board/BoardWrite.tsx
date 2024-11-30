import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/board.css'

interface BoardFormData {
  btitle: string;
  bcontent: string;
}

export default function BoardWrite() {
  const navigate = useNavigate();

  // DB 연동용 상태
  const [boardFormData, setBoardFormData] = useState<BoardFormData>({
    btitle: "",
    bcontent: ""
  });

  /** 폼데이터 입력 */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBoardFormData({ ...boardFormData, [name]: value });
  };

  console.log(boardFormData);

  /** 등록 완료 */
  const url = "http://127.0.0.1:8080/board/new";
  const handleWriteSubmit = () => { 
    axios.post(url, boardFormData)
      .then((res) => {
        if (res.data.cnt === 1) {
          navigate("/board");
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  /** 등록폼 리셋 */
  const handleWriteReset = () => {
    setBoardFormData({
      btitle: "",
      bcontent: ""
    });
  };

  /** 리스트 이동 */
  const handleNavigate = () => {
    navigate("/board");
  };
//tag
  return (
    <div className="content">
      <h1>BoardWrite</h1>
      <table className="board-table">
        <tbody>
          <tr>
            <th>제목</th>
            <td>
              <input
                type="text"
                name="btitle"
                value={boardFormData.btitle}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea
                className="board-textarea"
                name="bcontent"
                onChange={handleChange}
                value={boardFormData.bcontent}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="button" onClick={handleWriteSubmit}>등록완료</button>
              <button type="button" onClick={handleWriteReset}>다시쓰기</button>
              <button type="button" onClick={handleNavigate}>리스트</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
