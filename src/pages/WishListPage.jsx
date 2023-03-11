import React from 'react';
import { useSelector } from 'react-redux'
import wishList from '../assets/styles/WishListPage.module.scss';

function WishListPage() {
    const wishes = useSelector(state => state.wish.list);
    console.log(wishes);
    return (
        <div className={wishList.container}>
            <div className={wishList.wrapper}>
                <h4>Adrasan da Sonsuzluk Havuzlu Mağara Villa (No:5)</h4>
                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-618133020295708288/original/3ef583d2-16d9-4640-a939-246324320442.jpeg?im_w=960" alt="" />
                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-618133020295708288/original/3ef583d2-16d9-4640-a939-246324320442.jpeg?im_w=960" alt="" />
            </div>
        </div>
    )
}

export default WishListPage
