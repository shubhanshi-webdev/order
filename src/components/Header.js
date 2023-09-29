import { useState } from 'react';
import {LOGO_URL} from '../utilits/constants';
import {Link} from 'react-router-dom';

const Header = () => {

    const [loginBtn, setloginBtn] = useState('Login')
    return(
        <div className='header'>
            <div className='logo'>
                <Link to='/'>
                <img src={LOGO_URL} />
                </Link>
            </div>
            <div className='nav'>
                <ul className='nav-panel'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>

                    <li><button className='log-btn' onClick={() => {
                     loginBtn == 'Login' ?  setloginBtn('Logout') : setloginBtn('Login')
                    }}>{loginBtn}</button></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;