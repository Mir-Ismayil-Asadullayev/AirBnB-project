import React from 'react';
import CarouselComponent from '../components/CarouselComponent';
import homePage from '../assets/styles/HomePage.module.scss';
import FilterComponent from '../components/FilterComponent';
import CardComponent from '../components/CardsComponent';

function HomePage() {

    return (
        <>
            <div className={homePage.carousel}>
                <CarouselComponent />
                <FilterComponent />
            </div>
            <CardComponent />
        </>
    )
}

export default HomePage;
