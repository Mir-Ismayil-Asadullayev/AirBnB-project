import React from 'react'
import WishListPage from '../pages/WishListPage';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import CardPage from '../pages/CardPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <div>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route index path='/' element={<HomePage />} />
                    <Route path='card' element={<CardPage />} />
                    <Route path='wishlist' element={<WishListPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes
