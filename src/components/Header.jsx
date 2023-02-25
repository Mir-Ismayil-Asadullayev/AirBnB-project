import React, { useState } from 'react';
import icon from '../assets/images/airbnb.svg';
import globe from '../assets/images/globe.svg';
import header from '../assets/styles/Header.module.scss';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(prop) {
    const [menu, setmenu] = useState(false);


    return (
        <header className={header.header}>
            <div>
                <img className={header.logo} src={icon} alt="icon" />
            </div>
            <div className={header.searchBar}>
                <input className={header.searchInput} placeholder='Search for airbnb...' type="text" />
                <FontAwesomeIcon className={header.searchIcon} icon={faMagnifyingGlass} />
            </div>
            <div className={header.hamburgerBar}>
                <span>Airbnb your home</span>
                <img src={globe} className={header.globeIcon} alt="globe" />
                <button className={header.profile} onClick={()=>setmenu(!menu)}>
                    <FontAwesomeIcon className={header.hamburger} icon={faBars} />
                    <img className={header.profilePhoto} src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="profile" />
                </button>
                {menu && <div className={header.profileMenu}>
                    <span>Messages</span>
                    <span>Trips</span>
                    <span>Wishlists</span>
                    <hr />
                    <span>Airbnb your home</span>
                    <span>Host an experience</span>
                    <span>Refer a Host</span>
                    <span>Account</span>
                    <hr />
                    <span>Help</span>
                    <span>Log out</span>
                </div>}
            </div>

        </header>
    )
}

export default Header
