import '../css/style.css'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, removeUser } from '../util/localStorage'
import { Navigation } from 'react-router-dom';
export default function Header() {
    // getUser()가 null을 반환하는 경우를 처리
    let user = getUser() || {}; // getUser가 null일 경우 빈 객체로 대체
    let userId = user.userId || ''; // userId가 null일 경우 빈 문자열로 대체
    let navigate = useNavigate()
    const handleLogout = () => {
        console.log(1);
        removeUser();
        navigate('/')
    }

    return (
        <div className='header-container'>
            <h1>{userId}</h1> {/* userId를 출력 */}
            <div className="header-menu">
                <ul className="header-list">
                    <li className="link-logo"><h1>Closer's Board</h1></li>
                    <li className="link-board"><Link to="/board"><h1>Board</h1></Link></li>                  
                    {userId ? (
                      
                        <li className="link-login" onClick={handleLogout}><h1>Logout</h1></li>
                    
                    ) : (
                        <li className="link-login"><Link to='/login'><h1>Login</h1></Link></li>
                    )}

                    <li className="link-home"><Link to='/'><h1>Home</h1></Link></li>
                </ul>
            </div>
        </div>
    );
}
