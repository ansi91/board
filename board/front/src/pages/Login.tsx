import React, { useState, useRef, ChangeEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import * as cookie from '../util/cookies.js';
import { jwtDecode } from 'jwt-decode';

export function Login() {
  const navigate = useNavigate();
  const userIdRef = useRef<HTMLInputElement>(null);
  const userPassRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({ userId: '', userPass: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validataionCheck()) {
      console.log(formData);

      const url = 'http://127.0.0.1:8080/member/login';
      axios.post(url, formData)
        .then((res) => {
          const token = res.data.token;
          console.log('token==>> ', token);

          if (!token || token.split('.').length !== 3) {
            alert("유효하지 않은 토큰입니다.");
            return;
          }

          cookie.setCookie('x-auth-jwt', token);

          // 토큰에서 userInfo 정보를 로컬스토리지에 저장
          const userInfo = jwtDecode(token);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));

          alert("로그인 성공!!");
          navigate("/");  
        })
        .catch(error => {
          console.error("로그인 요청 중 오류 발생:", error);
          alert("로그인 요청 중 오류 발생");
        });
    }
  }

  const validataionCheck = () => {
    let checkFlag = true;

    if (!formData.userId.trim()) {
      alert("아이디를 입력해주세요");
      if (userIdRef.current) {
        userIdRef.current.focus();
      }
      checkFlag = false;
    } else if (!formData.userPass.trim()) {
      alert("패스워드를 입력해주세요");
      if (userPassRef.current) {
        userPassRef.current.focus();
      }
      checkFlag = false;
    }
    return checkFlag;
  }

  return (
    <div className='content'>
      <div className='login'>
        <h2>SHOPPY LOGIN</h2>
        <form className='login-form' onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>아 이 디</label>
              <input type="text" name="userId"
                ref={userIdRef}
                value={formData.userId} onChange={handleChange} />
            </li>
            <li>
              <label>패스워드</label>
              <input type="password" name="userPass"
                ref={userPassRef}
                value={formData.userPass} onChange={handleChange} />
            </li>
            <li>
              <button type="submit">Login</button>
              <button type="button">Reset</button>
            </li>
          </ul>
        </form>
        <div>
          <Link to='/signup'><h3>회원가입하기</h3></Link>
        </div>
      </div>
    </div>
  );
}
