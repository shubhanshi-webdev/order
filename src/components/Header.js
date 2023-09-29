import { useState } from 'react';
import {LOGO_URL} from '../utilits/constants';

const Header = () => {

    const [loginBtn, setloginBtn] = useState('Login')
    return(
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_URL} />
            </div>
            <div className='nav'>
                <ul className='nav-panel'>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Home</a></li>
                    <li><button className='log-btn' onClick={() => {
                     loginBtn == 'Login' ?  setloginBtn('Logout') : setloginBtn('Login')
                    }}>{loginBtn}</button></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;