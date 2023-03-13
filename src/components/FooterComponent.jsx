import React from 'react';
import footer from '../assets/styles/FooterComponent.module.scss';
import globe from '../assets/images/globe.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronUp } from '@fortawesome/free-solid-svg-icons';

function FooterComponent() {
    return (
        <footer className={footer.footer}>
            <div>
                <span>© 2023 Airbnb, Inc.</span>
                <span>· Terms ·</span>
                <span>Sitemap</span>
                <span>· Privacy ·</span>
                <span>Your Privacy Choices</span>
                <svg width="26" height="12" fill="none">
                    <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect>
                    <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
                    <path d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" stroke="#06F" strokeLinecap="round"></path>
                    <path d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" stroke="#fff" strokeLinecap="round"></path>
                    <rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect>
                </svg>
            </div>
            <div>
                <img src={globe} alt="globe" />
                <span>English (US)</span>
                <span>$ USD</span>
                <span>Support & resources</span>
                <FontAwesomeIcon icon={faChevronUp} />
            </div>
        </footer>
    )
}

export default FooterComponent;
