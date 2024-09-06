import '../css/style.css'
import { Link } from 'react-router-dom'


export default function Header(){
    return (
        <div className='header-container'>
            <div className="header-menu">
                <ul className="header-list">
                    <li className="link-logo"><h1>Closer's Board</h1></li>
                    <li className="link-login"><Link to='/login'><h1>Login</h1></Link></li>
                    <li className="link-home"><Link to='/'><h1>Home</h1></Link></li>
                </ul>
            </div>
        </div>
    )
}