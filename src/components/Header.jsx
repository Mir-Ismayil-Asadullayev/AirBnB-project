import React, { useEffect, useRef, useState } from 'react';
import logoFull from '../assets/images/airbnb.svg';
import logo from '../assets/images/icons8-airbnb.svg';
import burger from '../assets/images/burger.svg';
import globe from '../assets/images/globe.svg';
import header from '../assets/styles/Header.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarouselComponent from '../components/CarouselComponent';
import Filter from '../components/Filter';

function Header() {
    const [menu, setmenu] = useState(false);
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);
    const btnRef = useRef();
    const iconRef = useRef();
    const imgRef = useRef();

    useEffect(() => {
        const closer = (e) => {
            if (!(e.target === btnRef.current ||
                e.target === iconRef.current ||
                e.target === imgRef.current))
                setmenu(false);
        }
        const handleWindowResize = () => setwindowWidth(window.innerWidth);
        document.body.addEventListener("click", closer);
        window.addEventListener('resize', handleWindowResize);
        return () => {
            document.body.removeEventListener('click', closer);
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    return (
        <header >
            <div className={header.header}>
                <div>
                    <img className={header.logo} src={windowWidth < 1040 ? logo : logoFull} alt="icon" />
                </div>
                <div className={header.searchBar}>
                    <input className={header.searchInput} placeholder='Search for airbnb...' type="text" />
                    <FontAwesomeIcon className={header.searchIcon} icon={faMagnifyingGlass} />
                </div>
                <div className={header.hamburgerBar}>
                    <span>Airbnb your home</span>
                    <img src={globe} className={header.globeIcon} alt="globe" />
                    <button ref={btnRef} className={header.profile} onClick={() => setmenu(menu => !menu)}>
                        <img ref={iconRef} className={header.hamburger} src={burger} alt="burger" />
                        <img ref={imgRef} className={header.profilePhoto} src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="profile" />
                    </button>
                    {menu && <div className={header.profileMenu}>
                        <span>Messages</span>
                        <span>Trips</span>
                        <span>Wishlists</span>
                        <span>Airbnb your home</span>
                        <span>Host an experience</span>
                        <span>Refer a Host</span>
                        <span>Account</span>
                        <span>Help</span>
                        <span>Log out</span>
                    </div>}
                </div>
            </div>
            <div className={header.carousel}>
                <CarouselComponent />
                <Filter />
            </div>
        </header>
    )
}

export default Header
