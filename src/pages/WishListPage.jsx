import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import wishList from '../assets/styles/WishListPage.module.scss';
import { deleteCard, clearState } from '../store/wishSlice';

function WishListPage() {
    const wishes = useSelector(state => state.wish.list);
    const dispatch = useDispatch();
    const removeCard = (item) => {
        dispatch(deleteCard({
            photo: item.photo,
            pic: item.pic,
            name: item.name
        }))
    }
    const clearList = () => {
        dispatch(clearState());
    }

    return (
        <>
            <h1 style={{marginTop:'82px',textAlign:'center'}}>Wishlists</h1>
            <div className={wishList.container}>
                {
                    wishes && wishes.map(item =>
                        <div className={wishList.wrapper} key={Math.random()}>
                            <img src={item.pic} alt="pic" />
                            <img src={item.photo} alt="pic" />
                            <div>
                                <NavLink to='/card'>{item.name} </NavLink>
                                <button onClick={() => removeCard(item)}>Remove Card from List</button>
                            </div>
                        </div>
                    )
                }
                <button className={wishList.clearBtn} onClick={clearList}>Clear Wishlist</button>
            </div>
        </>
    )
}

export default WishListPage
