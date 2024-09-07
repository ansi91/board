import { Link } from 'react-router-dom'
import '../css/login.css' 

export function Login () {
    return (
        <div className="login-container">
            <ul className="login-list">
                <li><h1>Login</h1></li>
                <li>
                    <label className="login-id-label">아이디
                     <input className="login-id"type="text"/></label>  
                </li>
                <li>
                    <label className="login-pw-label">비밀번호
                    <input className="login-pw" type="password"/>
                    </label>
                </li>
                <li>
                    <button className="login-btn" type="button">Login</button>
                </li>
                <li className="register-find">
                    <div className="register-find-container">
                       <Link to="/signup">
                            <span className="register-member">회원가입</span> 
                       </Link> 
                       <Link to="/findpw">
                            <span className="find-pw">비밀번호 찾기</span> 
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}